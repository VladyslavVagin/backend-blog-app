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
                                            'data-bs-target="#controllers-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' :
                                            'id="xs-controllers-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' :
                                        'id="xs-injectables-links-module-AppModule-fbeaa9ab9351eb5587b09c44f79818049ac1cbcb5615ad967d777851d80bd009e7f614b8577dff4c7af9721f63379aaed2d44125ea4cbcb2b598cd03e62c2326"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' :
                                            'id="xs-controllers-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' :
                                        'id="xs-injectables-links-module-AuthModule-fd0de7a05da49d90d9252a31a430bfd2761cca6f0f75bcb373e665a9c004c6d5abbc2a1a7b1078f33dbfe4622078ad50cb9b9139e339e5e483090050dbabeed1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' :
                                            'id="xs-controllers-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' :
                                        'id="xs-injectables-links-module-PostsModule-e8ece0852c000439b90175c77184251f6ef8bafc36dfadf1091d5377fa7e9e90f45292adea75d940cda751fc4e8d3bbb0a1ee2d6134acb448fa2264fb45d4672"' }>
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
                                            'data-bs-target="#controllers-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' :
                                            'id="xs-controllers-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' :
                                        'id="xs-injectables-links-module-TagsModule-516feaa9283a62d22b4c084a71ffcc57ca30b8e86fbf7c133175db0d56fac051db9d29aa017096276cb0248d3259fe9f0b33cd0be055853f7183baba329d4e8a"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' :
                                            'id="xs-controllers-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' :
                                        'id="xs-injectables-links-module-UsersModule-42dd418cbefaed69d260372de8611714ec58af60dc05d9e22cbee285eb0b773209827670e0eed2bc6ac8df82b42713321efdc4d2a3c0c27852fbd34b3dee3a4a"' }>
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
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
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
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
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
                                <a href="classes/Tag.html" data-type="entity-link" >Tag</a>
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
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
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