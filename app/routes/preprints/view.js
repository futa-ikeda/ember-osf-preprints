import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('preprints');
    },
    setupController(controller, model) {
            this.getFiles(model).then(files => controller.set('fileList', files));
            model.get('contributors').then(authors => controller.set('authors', authors));
            this._super(...arguments);

    },
    getFiles(node) {
        return node.query(
        'files', { 'filter[name]': 'osfstorage' }
            ).then(
                providers => {
                    var provider = providers.get('firstObject');
                    if (provider) {
                        return provider.get('files');
                    }
                }
        );
});

