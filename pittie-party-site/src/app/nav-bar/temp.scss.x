    @apply flex flex-col gap-6;
    @apply mt-6 mx-auto;
    @apply w-full;
    @apply max-w-md;

    .no-wallet {
        @apply flex flex-col;
        @apply px-4 py-6;
        @apply rounded-lg;

        @apply text-popups-txt;
        @apply bg-popups-bg;
        @apply shadow;

        .use-block-explorer {
            &:not(:first-child) {
                @apply mt-3;
            }

            &:not(:first-child)::before {
                content: '';

                @apply block;
                @apply mx-auto my-3;
                @apply w-12;

                @apply border-t-2 border-popups-internal_border;
            }
        }

        .merkle-proof-manual-address {
            @apply flex flex-col;
            @apply mt-4;

            h2 {
                @apply font-semibold;
                @apply text-titles text-xl text-center;
            }

            p {
                @apply mt-3;
            }

            .feedback-message {
                @apply rounded-lg;
                @apply mt-4;
                @apply p-3;

                @apply text-wl_message-txt text-sm;
                @apply bg-wl_message-bg;
            }

            input {
                @apply rounded-t-lg;
                @apply rounded-b-none;
            }

            button {
                @apply rounded-b-lg;
                @apply rounded-t-none;
                @apply border-t-0;
            }
        }
    }

    .collection-not-ready {
        @apply flex items-center justify-center;
        @apply px-6 py-4;
        @apply rounded-lg;

        @apply text-popups-txt text-sm;
        @apply bg-popups-bg;
        @apply shadow;

        .spinner {
            @apply inline;
            @apply -ml-1 mr-3 h-8 w-8 text-loading_spinner;
            @apply animate-spin;
        }
    }

    .collection-status {
        @apply grid sm: grid-cols-2 auto-rows-min;
        @apply rounded-lg;

        @apply font-mono;
        @apply text-popups-txt text-sm;
        @apply bg-popups-bg;
        @apply shadow;
        font-family: Arial, Helvetica, sans-serif;

        &>* {
            @apply flex flex-col items-center;
            @apply px-6 py-4;

            .label {
                @apply text-xs text-label;
            }
        }

        .user-address {
            @apply sm: col-span-2;
            @apply overflow-hidden;
            font-family: Arial, Helvetica, sans-serif;
            @apply border-b border-popups-internal_border;

            .address {
                @apply w-full;

                @apply font-semibold;
                @apply truncate;
                @apply text-center;
            }
        }

        .supply,
        .current-sale {
            .label {
                @apply block;
                font-family: Arial, Helvetica, sans-serif;
                @apply font-semibold;
            }

            &.supply {
                @apply border-b sm: border-b-0 sm:border-r border-popups-internal_border;
                font-family: Arial, Helvetica, sans-serif;

            }
        }
    }

    .cannot-mint,
    .not-mainnet,
    .collection-sold-out {
        @apply rounded-lg;
        @apply px-6 py-4;

        @apply text-popups-txt text-center;
        @apply bg-popups-bg;
        @apply shadow;

        &.cannot-mint .emoji {
            @apply block;

            @apply text-4xl;
        }

        &.not-mainnet {
            @apply text-warning-txt;
            @apply bg-warning-bg;
            @apply border border-warning-border;


            .small {
                @apply block;

                @apply text-sm;
            }
        }

        &.collection-sold-out {
            h2 {
                @apply mb-3;

                @apply text-xl;
            }
        }
    }

    .mint-widget {
        @apply flex flex-col items-center;
        @apply rounded-lg;
        @apply overflow-hidden;

        @apply text-popups-txt text-center;
        @apply bg-popups-bg;
        @apply shadow;

        .preview {
            @apply p-8;

            @apply bg-token_preview;

            img {
                @apply m-auto;
                @apply max-h-52;

                filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.4));
            }
        }

        .price {
            @apply px-6 py-4;
        }

        &>* {
            @apply w-full;

            &:not(:last-child) {
                @apply border-b border-popups-internal_border;
            }
        }

        .controls {
            @apply flex items-stretch;

            &>* {
                @apply rounded-none;
                @apply border-0;
            }

            .decrease,
            .mint-amount {
                @apply border-r border-popups-internal_border;
            }

            .mint-amount {
                @apply flex items-center justify-center;
                @apply w-full;

                @apply font-semibold;
                @apply text-label text-lg;
                font-family: Arial, Helvetica, sans-serif;

            }

            .primary {
                @apply border-0;
            }
        }
    }



    .tab-content>.tab-pane {
        display: none
    }

    .tab-content>.active {
        display: block
    }

    .navbar {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .5rem 1rem
    }

    .navbar>.container,
    .navbar>.container-fluid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .navbar-brand {
        display: inline-block;
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap
    }

    .navbar-brand:focus,
    .navbar-brand:hover {
        text-decoration: none
    }

    .navbar-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none
    }

    .navbar-nav .nav-link {
        padding-right: 0;
        padding-left: 0
    }

    .navbar-nav .dropdown-menu {
        position: static;
        float: none
    }

    .navbar-text {
        display: inline-block;
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .navbar-collapse {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .navbar-toggler {
        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem
    }

    .navbar-toggler:focus,
    .navbar-toggler:hover {
        text-decoration: none
    }

    .navbar-toggler:not(:disabled):not(.disabled) {
        cursor: pointer
    }

    .navbar-toggler-icon {
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        vertical-align: middle;
        content: "";
        background: no-repeat center center;
        background-size: 100% 100%
    }