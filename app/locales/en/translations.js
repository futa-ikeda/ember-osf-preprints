const preprints = '{{documentType.pluralCapitalized}}';
const brand = 'OSF Preprints';
const arxivTrademarkLicense = 'arXiv is a trademark of Cornell University, used under license.';

export default {
    global: {
        share: 'Share',
        continue: 'Continue',
        complete: 'Complete',
        cancel: 'Cancel',
        optional: 'Optional',
        discard: 'Discard changes',
        back: 'Back',
        prev: 'Prev',
        next: 'Next',
        none: 'None',
        abstract: 'Abstract',
        doi: 'DOI',
        tags: 'Tags',
        search: 'Search',
        preprints,
        brand,
        brand_name: 'OSF',
        provider_brand: '{{name}} {{documentType.pluralCapitalized}}',
        add_preprint: 'Add a {{documentType.singular}}',
        add_preprint_navbar: 'Add a {{documentType.singularCapitalized}}',
        submit_preprint: 'Submit a {{documentType.singular}}',
        submit_preprint_navbar: 'Submit a {{documentType.singularCapitalized}}',
        title: 'Title',
        search_preprints: 'Search {{documentType.plural}}...',
        added_on: 'Added on',
        add: 'Add',
        restart: 'Restart',
        no_results_found: 'No results found.',
        authors: 'Authors',
        convert_project: 'The {{documentType.singular}} will be organized in the current project',
        convert_component: 'The {{documentType.singular}} will be organized in the current component',
        copy_inside_project: 'The {{documentType.singular}} will be organized in a new component',
        open_science_framework: 'Open Science Framework',
        license: 'License',
        pre_moderation: 'pre-moderation',
        post_moderation: 'post-moderation',
    },
    application: {
        separator: ' | ',
    },
    content: {
        header: {
            last_edited: 'Last edited',
            authors_label: 'Authors',
        },
        date_label: {
            created_on: 'Created on',
            submitted_on: 'Submitted on',
        },
        share: {
            download: 'Download',
            downloads: 'Downloads',
            download_file: 'Download file',
            download_preprint: 'Download {{documentType.singular}}',
        },
        see_more: 'See more',
        see_less: 'See less',
        version: 'Version',
        preprint_doi: '{{documentType.singularCapitalized}} DOI',
        article_doi: 'Peer-reviewed Publication DOI',
        preprint_pending_doi: 'DOI created after {{documentType.singular}} is made public',
        preprint_pending_doi_moderation: 'DOI created after moderator approval',
        preprint_pending_doi_minted: 'DOIs are minted by a third party, and may take up to 24 hours to be registered.',
        error_loading_preprint_file: 'Error loading preprint file. Please refresh the page.',
        original_publication_date: 'Original publication date',
        citations: 'Citations',
        disciplines: 'Disciplines',
        supplemental_materials: {
            title: 'Supplemental Materials',
        },
        project_button: {
            edit_preprint: 'Edit {{documentType.singular}}',
            edit_resubmit_preprint: 'Edit and resubmit',
        },
        orphan_preprint: 'The user has removed this file.',
        private_preprint_warning: 'This {{documentType.singular}} is private. Contact {{supportEmail}} if this is in error.',
        public: 'public',
    },
    discover: {
        search: {
            heading: '{{documentType.singularCapitalized}} Archive Search',
            heading_repository_search: 'Repository Search',
            paragraph: 'powered by',
            partner: 'Partner Repositories',
            placeholder: 'Search {{documentType.plural}}...',
            repository_placeholder: 'Search repository...',
        },
        sort_by: 'Sort by',
        sort_newest_oldest: 'Modified Date (newest to oldest)',
        sort_oldest_newest: 'Modified Date (oldest to newest)',
        modified_on: 'Modified on',
        relevance: 'Relevance',
        main: {
            active_filters: {
                heading: 'Active Filters',
                button: 'Clear filters',
            },
            refine: 'Refine your search by',
            providers: 'Providers',
            subject: 'Subject',
            source: 'Source',
            date: 'Date',
            type: 'Type',
            tag: 'Tag',
            box: {
                paragraph: 'Do you want to add your own research as a {{documentType.singular}}?',
                button_non_moderated: 'Add a {{documentType.singular}}',
                button_moderated: 'Submit a {{documentType.singular}}',
            },
            results: {
                of: 'of',
                no_results: 'Try broadening your search terms',
            },
            otherRepositories: 'Other {{documentType.singular}} repositories',
        },
    },
    index: {
        header: {
            powered_by: 'Powered by OSF Preprints',
            or: 'or',
            as_of: 'as of',
            example: 'See an example',
        },
        subjects: {
            heading: {
                provider: 'Browse <small>by provider</small>',
                hasHighlightedSubjects: 'Browse <small>by featured subjects</small>',
                noHighlightedSubjects: 'Browse <small>by subjects</small>',
            },
            links: {
                seeAllSubjects: 'See all subjects available',
            },
        },
        services: {
            top: {
                heading: '{{documentType.singularCapitalized}} Services',
                paragraph: 'Leading {{documentType.singular}} service providers use this open source infrastructure to support their communities.',
            },
            bottom: {
                p1: 'Create your own branded {{documentType.singular}} servers backed by the OSF.',
                div: {
                    line1: 'Check out the',
                    linkText1: 'open source code',
                    line2: 'and the',
                    linkText2: 'requirements and road map',
                    line3: '. Input welcome!',
                },
                contact: 'Contact us',
            },
        },
        advisory: {
            heading: 'Advisory Group',
            paragraph: 'Our advisory group includes leaders in preprints and scholarly communication',
        },
    },
    // Error pages
    'page-not-found': { // 404
        heading: 'Page not found',
        message: 'The page you were looking for is not found on the {{brand}} service.',
    },
    'page-forbidden': { // 403
        heading: 'Forbidden',
        message: 'User has restricted access to this page.',
    },
    'resource-deleted': { // 410
        heading: 'Resource deleted',
        message: 'User has deleted this content.',
    },
    'error-no-api': {
        heading: 'API Unavailable',
        message: 'Our API is currently unavailable. Try again in a few minutes. If the issue persists, please report it to <a href="mailto:support@osf.io">support@osf.io</a>.',
    },
    submit: {
        create_heading: 'Create {{documentType.singularCapitalized}}',
        submit_heading: 'Submit {{documentType.singularCapitalized}}',
        edit_heading: 'Edit {{documentType.singularCapitalized}}',
        body: {
            upload: 'Upload from your computer',
            connect: 'Select from an existing OSF project',
            subjects_description: 'Select a discipline and subdiscipline, if relevant. Add more by clicking on a new discipline or subdiscipline.',
            supplemental_description: 'Connect an OSF project to share data, code, protocols, or other supplemental materials.',
            supplemental_new_project: 'Create a new OSF project',
            supplemental_connect_existing: 'Connect an existing OSF project',
            supplemental_title: 'Project title',
            remove_subject_aria: 'Remove subject',
            disconnect_supplemental: 'Disconnect the project',
            supplemental_change_saved: 'Change the connected project',
            supplemental_new_help_text: 'This creates a public project for your supplemental materials. Upload files and manage contributors on the project.',
            supplemental_existing_help_text: 'This will make your project public, if it is not already.',
            basics: {
                doi: {
                    label: 'Peer-reviewed publication DOI (optional)',
                },
                keywords: {
                    label: 'Keywords',
                    paragraph: 'Add keywords to increase discoverability of your {{documentType.singular}}',
                },
                abstract: {
                    placeholder: 'Add a brief summary of your {{documentType.singular}}',
                },
                tags: {
                    placeholder: 'Add a tag',
                },
                license: {
                    apply_license_title: 'Apply this license to my OSF Project.',
                    apply_license_text: 'Selecting a license for your {{documentType.singular}} does not automatically apply the license to your OSF project.',
                },
                original_publication_date: {
                    label: 'Original publication date',
                },
            },
            authors: {
                paragraph: 'Add {{documentType.singular}} authors and order them appropriately. Search for authors that have OSF accounts or invite unregistered users to join by entering their email addresses.',
            },
            submit: {
                information: {
                    line1: {
                        default: 'When you create this {{documentType.singular}}, it will be assigned a DOI and become publicly accessible via {{name}}. The {{documentType.singular}} file cannot be deleted, but it can be updated or modified.',
                        pre: '{{name}} uses <strong>{{reviewsWorkflow}}</strong>. If your {{documentType.singular}} is accepted, it will be assigned a DOI and become publicly accessible via {{name}}. The {{documentType.singular}} file cannot be deleted, but it can be updated or modified.',
                        post: '{{name}} uses <strong>{{reviewsWorkflow}}</strong>. When you submit this {{documentType.singular}}, it will be assigned a DOI and become publicly accessible via {{name}}. Your {{documentType.singular}} will only become private if rejected by a moderator. The {{documentType.singular}} file cannot be deleted, but it can be updated or modified.',
                    },
                    line2: {
                        create: 'By creating this {{documentType.singular}}, you confirm that all contributors agree with sharing it and that you have the right to share this {{documentType.singular}}.',
                        submit: 'By submitting this {{documentType.singular}}, you confirm that all contributors agree with sharing it and that you have the right to share this {{documentType.singular}}.',
                    },
                },
                invalid: {
                    description: 'The following section(s) must be completed before submitting this {{documentType.singular}}.',
                    discipline: 'Discipline',
                    basics: 'Basics',
                    upload: 'Upload',
                },
                submit_button: 'Submit {{documentType.singular}}',
                create_button: 'Create {{documentType.singular}}',

            },
            edit: {
                information: {
                    line1: {
                        pre: '{{name}} uses <strong>{{reviewsWorkflow}}</strong>. If your {{documentType.singular}} is accepted, it will become publicly accessible via {{name}} and assigned a DOI.',
                        post_rejected: '{{name}} uses <strong>{{reviewsWorkflow}}</strong>. Your {{documentType.singular}} was rejected by a moderator so it will remain private.',
                    },
                    line2: {
                        pre_pending: 'Resubmitting may affect your position in the moderation queue.',
                        pre_rejected: 'Once you have addressed any moderator concerns, you may resubmit for review.',
                        post_rejected: 'If you have addressed all moderator concerns or believe there has been a mistake, please email <a>{{email}}</a> to discuss resubmission.',
                    },
                },
                cannot_edit: 'You do not have permission to edit this section.',
                resubmit_button: 'Resubmit',
                resubmit_help_text: 'Only contributors with admin permissions can resubmit for review.',
                return_button: 'Return to {{documentType.singular}}',
            },
            save_continue: 'Save and continue',
        },
        could_not_update_title: 'Error updating title. Please try again.',
        error_copying_file: 'Error copying file; please try again.',
        error_accessing_files: 'Error accessing files. Please try again.',
        error_saving_supplemental: 'Error saving supplemental project. Please try again.',
        error_removing_supplemental: 'Error disconnecting supplemental project. Please try again.',
        success_saving_supplemental: 'Supplemental project disconnected.',
        could_not_create_component: 'Could not create component. Please try again.',
        abandoned_preprint_error: 'Error with abandoned {{documentType.singular}}.',
        abandon_preprint_confirmation: 'Are you sure you want to abandon changes to this preprint?',
        preprint_file_uploaded: '{{documentType.singularCapitalized}} file uploaded!',
        preprint_author_added: '{{documentType.singularCapitalized}} author added!',
        preprint_author_removed: '{{documentType.singularCapitalized}} author removed!',
        preprint_self_removed: 'You have removed yourself from the {{documentType.singular}}!',
        preprint_unregistered_author_added: '{{documentType.singularCaptalized}} unregistered author added!',
        error_adding_author: 'Could not add author. Please try again.',
        error_removing_author: 'Could not remove author. Please try again.',
        error_adding_unregistered_author: 'Could not add unregistered author. Please try again.',
        error_initiating_preprint: 'Could not initiate {{documentType.singular}}. Please try again.',
        error_saving_preprint: 'Could not save {{documentType.singular}}. Please try again.',
        error_creating_preprint: 'Could not create {{documentType.singular}}. Please try again.',
        doi_error: 'Error saving DOI',
        basics_error: 'Error saving basics fields.',
        disciplines_error: 'Error saving discipline(s).',
        search_contributors_error: 'Could not perform search query.',
        server_locked: 'You cannot change the paper service after a file has been uploaded',
        please_select_server: 'Please select a paper service before continuing',
        please_complete_upload: 'Please complete file section before continuing',
    },
    components: {
        'confirm-share-preprint': {
            body: 'Once this {{documentType.singular}} is made public, you should assume that it will always be public. Even if you delete it, search engines or others may access the files before you do so.',
            title: {
                submit: 'Submit {{documentType.singular}}',
                create: 'Create {{documentType.singular}}',
                resubmit: 'Resubmit {{documentType.singular}}',
            },
        },
        'convert-or-copy': {
            organize_language_project: 'You can organize your {{documentType.singular}} by storing the file in this project or in its own new component.  If you select ‘Make a new component’, the {{documentType.singular}} file will be stored in a new component inside this project.  If you select ‘Use the current project’, the {{documentType.singular}} file will be stored in this project.  If you are unsure, select ‘Make a new component’.',
            organize_language_component: 'You can organize your {{documentType.singular}} by storing the file in this component or in its own new component.  If you select ‘Make a new component’, the {{documentType.singular}} file will be stored in a new component inside this component.  If you select ‘Use the current component’, the {{documentType.singular}} file will be stored in this component.  If you are unsure, select ‘Make a new component’.',
            copy: 'Make a new component',
            convert_project: 'Use the current project',
            convert_component: 'Use the current component',
            create_a_new_component: 'Create a new component',
            continue_with_this_project: 'Continue with this project',
            continue_with_this_component: 'Continue with this component',
            header_convert_confirmation_project: 'Your project details will be saved as you continue to work on this form.',
            header_convert_confirmation_component: 'Your component details will be saved as you continue to work on this form.',
            convert_confirmation_details_project: 'Changes you make on this page are saved immediately.  Create a new component under this project to avoid overwriting its details.',
            convert_confirmation_details_component: 'Changes you make on this page are saved immediately.  Create a new component under this component to avoid overwriting its details.',
        },
        'claim-user': {
            modal_title: 'Claim as {{email}}?',
            claim_button: 'Claim',
            modal_body: 'If you claim this account, a contributor of this project will be emailed to confirm your identity.',
            tooltip_message: 'Is this you? Click to claim.',
            title: 'Claim Account',
            success_message: 'Email will arrive shortly. Please check {{email}}',
        },
        'chronos-submission-status-list-row': {
            drafted: 'Drafted to {{title}}',
            submitted: 'Submitted to {{title}}',
            accepted: 'Accepted to {{title}}',
            rejected: 'Rejected from {{title}}',
            published: 'Published in {{title}}',
        },
        'error-page': {
            email_message: 'If this should not have occurred and the issue persists, please report it to',
            go_to: 'Go to {{brand}}',
        },
        'file-uploader': {
            dropzone_message: 'Drop {{documentType.singular}} file here to upload',
            title_placeholder: 'Enter {{documentType.singular}} title',
            update_version: 'Update {{documentType.singular}} file version.  File must have the same name as the original.',
            could_not_create_preprint: 'Could not create preprint. Please try again.',
            could_not_update_title: 'Could not update title. Please try again.',
            version_error: 'This is not a version of the current {{documentType.singular}} file.',
            preprint_file_updated: '{{documentType.singularCapitalized}} file updated!',
            preprint_file_error: 'Could not set {{documentType.singular}} file. Please try again.',
            upload_error: 'Upload Failed',
            dropzone_text_override: 'Click or drag another {{documentType.singular}} file to replace',
        },
        'preprint-footer-branded': {
            twitter: 'Twitter',
            facebook: 'Facebook',
            instagram: 'Instagram',
            support: 'Support',
            contact: 'Contact',
        },
        'permission-language': {
            arxivTrademarkLicense,
            arxiv_non_endorsement: 'arXiv is a trademark of Cornell University, used under license. This license should not be understood to indicate endorsement of content on {{provider}} by Cornell University or arXiv.',
            no_trademark: '',
        },
        'preprint-file-renderer': {
            download_previous_versions: 'Download previous versions',
        },
        'preprint-form-authors': {
            search: {
                placeholder: 'Search by name or user profile information',
            },
            unregistered_users: {
                paragraph: 'Can\'t find the user you\'re looking for?',
                button: 'Add author by email address',
            },
            results: 'Results',
            yourself: 'Yourself',
            already_added: 'Already added',
            add_email: 'Add author by email',
            authors: {
                title: 'Author Information',
                order_instructions: 'Drag and drop authors to change authorship order.',
                name: 'Name',
                permissions: 'Permissions',
                permission_info: 'Permission Information',
                citation: 'Citation',
                in_citation: 'In citation',
                citation_info: 'Citation Information',
                parent_contributors: 'Add contributors from parent project',
                remove_author: 'Remove author from authors list',
            },
            remove: 'Remove',
            remove_confirm: 'Are you sure you want to remove yourself from {{title}}?',
            remove_title: 'Remove Author',
        },
        'preprint-form-body': {
            // Nothing to translate
        },
        'preprint-form-header': {
            changes_saved: 'Changes saved!',
            file: '{{documentType.singularCapitalized}} file',
            title: '{{documentType.singularCapitalized}} title',
            location: '{{documentType.singularCapitalized}} location',
            click_edit: 'Click to edit',
            server: 'Paper service',
            connected_project: 'Connected OSF project',
            name: {
                Server: 'Select a service',
                File: 'File',
                Discipline: 'Discipline',
                Basics: 'Basics',
                Authors: 'Authors',
                Submit: 'Submit',
                Update: 'Update',
                Supplemental: 'Supplemental materials',
                choose_project: 'Choose Project',
                choose_file: 'Choose File',
                organize: 'Organize',
                finalize_upload: 'Finalize Upload',
                title_of_preprint: '{{documentType.singularCapitalized}} Title',
                preprint_file: '{{documentType.singularCapitalized}} File',
            },
        },
        'preprint-form-project-select': {
            existing_project_selector: 'The list of projects appearing in the selector are projects and components for which you have admin access.',
            upload_preprint: 'Upload {{documentType.singular}}',
            select_existing_file: 'Select existing file as {{documentType.singular}}',
            edit_preprint_title_project: 'Edit {{documentType.singular}} title',
            copy_file_help_text: 'This will make a copy of your file to become your {{documentType.singular}}.',
            edit_preprint_title: 'Edit your {{documentType.singular}} title',
            admin_only: 'You must be the admin of this project to copy a file.  Please ask the admin of this project to make you an admin so you may copy a file.',
        },
        'preprint-form-section': {
            // Nothing to translate
        },
        'preprint-navbar': {
            toggle: 'Toggle navigation',
        },
        'preprint-navbar-branded': {
            my_preprints: 'My Preprints',
            headline: 'On the OSF',
            reviews: 'My Reviewing',
            donate: 'Donate',
        },
        'preprint-status-banner': {
            message: {
                base: '{{name}} uses {{reviewsWorkflow}}. This {{documentType.singular}}',
                pending_pre: 'is not publicly available or searchable until approved by a moderator',
                pending_post: 'is publicly available and searchable but is subject to removal by a moderator',
                accepted: 'has been accepted by a moderator and is publicly available and searchable',
                rejected: 'has been rejected by a moderator and is not publicly available or searchable',
            },
            pending: 'pending',
            accepted: 'accepted',
            rejected: 'rejected',
            feedback: {
                moderator_feedback: 'Moderator feedback',
                moderator: 'Moderator',
                base: 'This {{documentType.singular}}',
            },
        },
        'search-preprints': {
            // Nothing to translate
        },
        'search-result': {
            // Nothing to translate
        },
        'share-popup': {
            tweet: 'Tweet',
            post_facebook: 'Post to Facebook',
            share_linkedin: 'Share on LinkedIn',
            send_email: 'Send in email',
        },
        'taxonomy-top-list': {
            // Nothing to translate
        },
        'search-facet-taxonomy': {
            // Nothing to translate
        },
        'unregistered-contributor-form': {
            full_name: 'Full Name',
            email: 'Enter email',
            paragraph: 'We will notify the user that they have been added to your {{documentType.singular}}.',
        },
        'validated-input': {
            // Nothing to translate
        },
    },
};
