/*jslint node: true */

module.exports = {

    by_author : {
        map: function (doc) {
            "use strict";
            if (doc.authors) {
                doc.authors.forEach(emit);
            }
        }.toString(),
        reduce: '_count'
    },
    
    by_subject: {
        map: function (doc) {
            "use strict";
            if (doc.subjects) {
                doc.subjects.forEach(function (subject) {
                    emit(subject, subject);
                    
                    subject.split(/\s+--\s+/).forEach(function (part) {
                        emit(part, subject);
                    });
                });
            }
        }.toString(),
        reduce: '_count'
    }
};