module.exports = config => {
    config.addCollection('posts', collection =>
        collection
            .getFilteredByGlob('./src/items/*.md')
            .filter(post => post.data.published)
    );

    config.addCollection('tagsList', (collection) => {
        const tagsSet = new Set();

        collection.getAll().forEach((item) => {
            if (!item.data.tags) return;
            item.data.tags.forEach((tag) => tagsSet.add(tag));
        });

        return tagsSet;
    });

    // format dates
    const dateformat = require('./lib/filters/dateformat');
    config.addFilter('dmy', dateformat.dmy);
    config.addFilter('ymd', dateformat.ymd);

    config.addPassthroughCopy('src/i');
    config.addPassthroughCopy('src/css');

    return {
        dir: {
            input: 'src',
            output: 'docs'
        },
    };
};