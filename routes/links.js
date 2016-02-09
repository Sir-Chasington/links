var _ = require('lodash');
var Link = require('../models/link.js');

module.exports = function(app) {

    /* Create */
    app.post('/link', function (req, res) {
        var entity = new Link(req.body);
        entity.save(function(err) {
            if (err) {
                res.json({info: 'error during link create', error: err});
            };
            res.json(entity);
        });
    });

    /* Read */
    app.get('/link', function (req, res) {
        Link.find(function(err, links) {
            if (err) {
                res.json({info: 'error during find links', error: err});
            };
            res.json({ data: links});
        });
    });

    app.get('/link/:id', function (req, res) {
        Link.findById(req.params.id, function(err, link) {
            if (err) {
                res.json({info: 'error during find link', error: err});
            };
            if (link) {
                res.json({info: 'link found successfully', data: link});
            } else {
                res.json({info: 'link not found'});
            }
        });
    });

    /* Update */
    app.put('/link/:id', function (req, res) {
        Link.findById(req.params.id, function(err, link) {
            if (err) {
                res.json({info: 'error during find link', error: err});
            };
            if (link) {
                _.merge(link, req.body);
                link.save(function(err) {
                    if (err) {
                        res.json({info: 'error during link update', error: err});
                    };
                    res.json({info: 'link updated successfully'});
                });
            } else {
                res.json({info: 'link not found'});
            }

        });
    });

    /* Delete */
    app.delete('/link/:id', function (req, res) {
        Link.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({info: 'error during remove link', error: err});
            };
            res.json({info: 'link removed successfully'});
        });
    });


};