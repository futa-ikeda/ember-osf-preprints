import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout, all } from 'ember-concurrency';
import { A } from '@ember/array';
import config from 'ember-get-config';

export default Component.extend({
    store: service(),
    toast: service(),
    isLoading: false,
    canLoadMore: false,
    page: 1,
    selectedJournal: null,
    keyword: '',
    preprint: null,
    journals: A(),
    publisherFilterKeyword: null,
    isOpen: false,

    didReceiveAttrs() {
        this.get('_fetchAllApprovedJournals').perform();
    },

    actions: {
        /*
            This action is not used because we only need 7 journals from APA
         */
        getInitialJournals(keyword) {
            this.get('_fetchInitialJournals').perform(keyword);
        },
        /*
            This action is not used because we only need 7 journals from APA
         */
        getMoreJournals() {
            this.get('_fetchMoreJournals').perform();
        },
        journalSelected(journal) {
            this.set('selectedJournal', journal);
        },
        cancelSubmission() {
            this.set('selectedJournal', null);
        },
    },

    _fetchAllApprovedJournals: task(function* () {
        const approvedJournals = yield this.get('store').query(
            'chronos-journal',
            {
                page: 1,
                'filter[id]': config.approvedChronosJournalIds.join(','),
                'page[size]': 100,
            },
        );
        this.set('journals', approvedJournals);
    }),
    /*
        This function is not used because we only need 7 journals for APA.
     */
    _fetchInitialJournals: task(function* (keyword) {
        // Wait a bit for the user to finish typing.
        yield timeout(500);
        // Reset the list of journals
        this.set('journals', A());
        // Reset page number
        this.set('page', 1);
        this.set('isLoading', true);
        const journals = yield this.get('store').query('chronos-journal', { page: 1, 'filter[title]': keyword, 'filter[name]': this.get('publisherFilterKeyword') });
        this.set('isLoading', false);
        const canLoadMore = !(journals.get('meta.total_pages') === this.get('page'));
        // Set the keyword
        this.set('keyword', keyword);
        this.set('canLoadMore', canLoadMore);
        this.set('journals', journals);
    }).restartable(),

    /*
        This function is not used because we only need 7 journals for APA.
     */
    _fetchMoreJournals: task(function* () {
        const journals = this.get('journals');
        const page = this.get('page');
        const keyword = this.get('keyword');
        this.set('isLoading', true);
        const moreJournals = yield this.get('store').query('chronos-journal', { page: page + 1, 'filter[title]': keyword, 'filter[name]': this.get('publisherFilterKeyword') });
        journals.pushObjects(moreJournals.toArray().map(item => item._internalModel));
        this.set('isLoading', false);
        const canLoadMore = page + 1 < journals.get('meta.total_pages');
        if (canLoadMore) {
            this.set('page', page + 1);
        }
        this.set('canLoadMore', canLoadMore);
    }).enqueue(),
    /*
        Update all chronos-submissions status
     */
    _updateChronosSubmissions: task(function* () {
        if (this.get('isOpen')) {
            this.set('isOpen', false);
            return;
        } else {
            this.set('isOpen', true);
        }
        const submissions = yield this.get('store').peekAll('chronos-submission');
        const childTasks = [];
        submissions.forEach(function (item) {
            if (item.get('preprint.id') === this.get('preprint.id')) {
                childTasks.push(this.get('_updateStatus').perform(item));
            }
        }.bind(this));
        yield all(childTasks);
    }).drop(),
    /*
        Update status of a single chronos-submission, called by _updateChronosSubmissions.
     */
    _updateStatus: task(function* (chronosSubmission) {
        yield chronosSubmission.save();
    }).drop().maxConcurrency(7),
    /*
        Task to submit to chronos
     */
    _submit: task(function* () {
        const newTab = window.open();
        const submission = this.get('store').createRecord('chronos-submission', {
            journal: this.get('selectedJournal'),
            preprint: this.get('preprint'),
        });
        try {
            yield submission.save();
            newTab.location.href = submission.get('submissionUrl');
            window.location.reload(true);
        } catch (e) {
            newTab.close();
            this.get('toast').error(e.errors[0].detail);
        }
    }).drop(),
});
