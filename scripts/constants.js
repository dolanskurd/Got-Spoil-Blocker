var AVCLUB_FEED_ELEMENTS_SELECTOR, BUZZFEED_ELEMENTS_SELECTOR, DATA_KEY, DEATH_NAMES, FACEBOOK_FEED_ELEMENTS_SELECTOR, FEEDLY_ELEMENTS_SELECTOR, GIZMODO_ELEMENTS_SELECTOR, GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR, GOOGLE_PLUS_ELEMENTS_SELECTOR, GOT_RELATED_SUBREDDITS, GOT_SUBREDDITS_REGEX, REDDIT_FEED_ELEMENTS_SELECTOR, SLACK_FEED_ELEMENTS_SELECTOR, SPOILER_WORDS_LIST, SPOILER_WORDS_REGEX, TUMBLR_ELEMENTS_SELECTOR, TWITTER_FEED_ELEMENTS_SELECTOR, YOUTUBE_ELEMENTS_SELECTOR;

DATA_KEY = 'game-of-spoils';

AVCLUB_FEED_ELEMENTS_SELECTOR = '.item, article.short, article > .heading';

BUZZFEED_ELEMENTS_SELECTOR = '.card--article-featured, .card--article, .card--package, .card--video, .sidebar__link, .js-now-buzzing__list > li';

FACEBOOK_FEED_ELEMENTS_SELECTOR = 'div[data-testid="fbfeed_story"],div[data-testid="results"] > div, div[role="article"], #pagelet_trending_tags_and_topics ul > li, #BrowseResultsContainer > div';

FEEDLY_ELEMENTS_SELECTOR = '.entry';

GIZMODO_ELEMENTS_SELECTOR = '.featured-item, article';

GOOGLE_NEWS_FEED_ELEMENTS_SELECTOR = 'a[target="_blank"]';

GOOGLE_PLUS_ELEMENTS_SELECTOR = 'div[id^="update-"], c-wiz div div c-wiz';

REDDIT_FEED_ELEMENTS_SELECTOR = '.sitetable > .thing.link:visible, .usertext-body';

SLACK_FEED_ELEMENTS_SELECTOR = 'ts-message';

TUMBLR_ELEMENTS_SELECTOR = '.post_container, article';

TWITTER_FEED_ELEMENTS_SELECTOR = "[data-item-type='tweet'], .trend-item, article, li";

YOUTUBE_ELEMENTS_SELECTOR = '.yt-lockup, .related-list-item, .comment-renderer-text, ytd-grid-video-renderer, ytd-compact-video-renderer, #primary-inner, ytd-video-renderer';

SPOILER_WORDS_LIST = ['School','سانسور','Konohamaru','#got', 'ady stonehea', 'aidan gillen', 'alfie allen', 'arya stark', 'asoiaf', 'azor ahai', 'baelish', 'baratheon', 'ben crompton', 'bloodraven', 'braavos', 'bran stark', 'briene of tarth', 'brienne of tarth', 'carice van houten', 'casterly rock', 'cersei ', 'conleth hill', 'd.b. weiss', 'daenerys', 'daniel portman', 'david benioff', 'davos seaworth', 'dornish', 'dothraki', 'dreadfort', 'emilia clarke', 'game of thrones', 'gameofthrone', 'gameofthone', 'gamesofthrone', 'greyjoy', 'gwendoline christie', 'highgarden', 'hodor', 'house bolton', 'house stark', 'house tyrell', 'howland reed', 'iain glen', 'ian mcelhinney', 'iron throne', 'isaac hempstead wright', 'jerome flynn', 'john bradley', 'jojen reed', 'jon snow', 'julian glover', 'khaleesi', "king's landing", 'kit harington', 'kit harrington', 'kristian nairn', 'lanister', 'lannisport', 'lannister', 'lena headey', 'liam cunningham', 'littlefinger', 'maisie williams', 'meereen', 'melisandre', 'michele fairley', 'michelle fairley', 'myrcella', 'natalie dormer', 'nathalie emmanue', 'ned stark', 'nikolaj coster-waldau', 'olenna tyrell', 'peter dinklage', 'podrick payne', 'queen of thorns', 'ramsay bolton', 'roose bolton', 'rory mccann', 'sandor clegane', 'sansa stark', 'sophie turner', 'sothoryos', 'stephen dillane', 'targaryen', 'tower of joy', 'tyrion', 'vaes dothrak', 'viserys', 'walder frey', 'westeros', 'white walker', 'whitewalker', 'wildling', 'winterfell', 'گات', 'تست', 'وقت'];

SPOILER_WORDS_REGEX = new RegExp(SPOILER_WORDS_LIST.join('|'), 'i');

DEATH_NAMES = ["got burned at the stake to appease R'hllor", 'contracted greyscale and was quarantined permanently', 'did not live through the Long Night', 'drank way too much Moon Tea', 'found itself too far north when winter came', 'is dark and full of terrors', 'lost in trial by combat', 'did not win the game of thrones', 'suffered terribly at the paws of Ser Pounce', 'warged into a dead cat', 'was grimly beheaded for desertion', 'was impaled by a lance at a tournament by a lowly hedge knight', 'was incinerated by hot dragon breath', 'was murdered by its very own nuncle', 'was slain by a shadow', 'was slowly poisoned over a period of many fortnights', 'was torn asunder by six direwolves'];

GOT_RELATED_SUBREDDITS = ['gameofthrones', 'asoiaf', 'iceandfire', 'agotboardgame', 'gamesofthrones', 'westeros', 'thronescomics', 'asongofmemesandrage', 'earthoficeandfire'];

GOT_SUBREDDITS_REGEX = new RegExp('(\/r\/)' + GOT_RELATED_SUBREDDITS.join('|'), 'i');