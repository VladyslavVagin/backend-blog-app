'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend-blog-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' :
                                            'id="xs-controllers-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' :
                                        'id="xs-injectables-links-module-AppModule-5701fa6a9427fcdbe14766f5f4308f4b195cb60f6b38757e49d827ca23b9f0f08f99a4d731bdd905ebc424455fd83daa3662b87b77a15a6efe374f85c0f98ba9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' :
                                            'id="xs-controllers-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' :
                                        'id="xs-injectables-links-module-AuthModule-6b101d16fffd63eb21365e5f690e256d415c70bca3f970c8ec44c183ea076c516e11d3475265ad26d934d9d5af8f74155852c1c07141c0be96783b6d5db177b8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-82b96c9282e330f557b7aff7c0430b87987f7d131373d154e5bb6b93095c29fe942054cf9079acfa3e229c62d7a4b09af505014d127cbecd81a875e1406fdb38"' : 'data-bs-target="#xs-injectables-links-module-MailModule-82b96c9282e330f557b7aff7c0430b87987f7d131373d154e5bb6b93095c29fe942054cf9079acfa3e229c62d7a4b09af505014d127cbecd81a875e1406fdb38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-82b96c9282e330f557b7aff7c0430b87987f7d131373d154e5bb6b93095c29fe942054cf9079acfa3e229c62d7a4b09af505014d127cbecd81a875e1406fdb38"' :
                                        'id="xs-injectables-links-module-MailModule-82b96c9282e330f557b7aff7c0430b87987f7d131373d154e5bb6b93095c29fe942054cf9079acfa3e229c62d7a4b09af505014d127cbecd81a875e1406fdb38"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-042c9a2a51d2c21f43fe963470e096a0eb8fb7234fd0e40c0cce03ffe180e514ec1fd857819d2dc14f9fe66d01387f1ced14809ffdf1216adcdc043d55ea15c1"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-042c9a2a51d2c21f43fe963470e096a0eb8fb7234fd0e40c0cce03ffe180e514ec1fd857819d2dc14f9fe66d01387f1ced14809ffdf1216adcdc043d55ea15c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-042c9a2a51d2c21f43fe963470e096a0eb8fb7234fd0e40c0cce03ffe180e514ec1fd857819d2dc14f9fe66d01387f1ced14809ffdf1216adcdc043d55ea15c1"' :
                                        'id="xs-injectables-links-module-PaginationModule-042c9a2a51d2c21f43fe963470e096a0eb8fb7234fd0e40c0cce03ffe180e514ec1fd857819d2dc14f9fe66d01387f1ced14809ffdf1216adcdc043d55ea15c1"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' :
                                            'id="xs-controllers-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' :
                                        'id="xs-injectables-links-module-PostsModule-6cc2089811c2031ae9c05062475edf5679f1cada8bb6808b38aaa2d49499dbc3da14b96c6aeedc03384523ab52227887aab75334e6f01a746ebd613ab7392a1d"' }>
                                        <li class="link">
                                            <a href="injectables/CreatePostProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' :
                                            'id="xs-controllers-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' :
                                        'id="xs-injectables-links-module-TagsModule-bea66d914e0614cd04cfd53dd8c920871583d57aa583afaa5ca4b3fb354bc500447af0a698c0d323a783b4dcda8293a02ababea9f2d7d478fcfe03127ba7f0d0"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadsModule.html" data-type="entity-link" >UploadsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' : 'data-bs-target="#xs-controllers-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' :
                                            'id="xs-controllers-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' }>
                                            <li class="link">
                                                <a href="controllers/UploadsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' : 'data-bs-target="#xs-injectables-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' :
                                        'id="xs-injectables-links-module-UploadsModule-6a9cc32cfc21b2e33f3338a37a67980a3051cb9dc6b8cb2b070cf8e349482d64b781d34755a607178ca684753ef8fc2d2bac39b280ab5d9d79772cb7edced94d"' }>
                                        <li class="link">
                                            <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadToAwsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' :
                                            'id="xs-controllers-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' :
                                        'id="xs-injectables-links-module-UsersModule-75905c0d67e012829a24372dfaa0aa74d2344ab5a115e18cd0eb67a4621e8e31e37346e1b2492f7e502a78a8996c509131dc1fafc20a69ecbc2e06ad82f27db4"' }>
                                        <li class="link">
                                            <a href="injectables/CreateGoogleUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGoogleUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneByGoogleIdProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneByGoogleIdProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GoogleAuthenticationController.html" data-type="entity-link" >GoogleAuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UploadsController.html" data-type="entity-link" >UploadsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsBaseDto.html" data-type="entity-link" >GetPostsBaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleTokenDto.html" data-type="entity-link" >GoogleTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tag.html" data-type="entity-link" >Tag</a>
                            </li>
                            <li class="link">
                                <a href="classes/Upload.html" data-type="entity-link" >Upload</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateGoogleUserProvider.html" data-type="entity-link" >CreateGoogleUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatePostProvider.html" data-type="entity-link" >CreatePostProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserProvider.html" data-type="entity-link" >CreateUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneByGoogleIdProvider.html" data-type="entity-link" >FindOneByGoogleIdProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" >FindOneUserByEmailProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" >GenerateTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthenticationService.html" data-type="entity-link" >GoogleAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationProvider.html" data-type="entity-link" >PaginationProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" >RefreshTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInProvider.html" data-type="entity-link" >SignInProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadsService.html" data-type="entity-link" >UploadsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadToAwsProvider.html" data-type="entity-link" >UploadToAwsProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveUserData.html" data-type="entity-link" >ActiveUserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GoogleUser.html" data-type="entity-link" >GoogleUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadFile.html" data-type="entity-link" >UploadFile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});