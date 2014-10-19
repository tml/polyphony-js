/* eslint-env node, browser */
/* eslint strict: 0 */
/* global Module */

/**
 * @file The main entry point for polyphony.js. The {{lib}} and {{emscripten}}
 *       comments in this file will be replaced with the sources in lib and the
 *       generated Emscripten code, respectively.
 * @author Greg Curtis <greg.r.curtis@gmail.com>
 */

/* {{vendors}} */

/** @namespace polyphony */
var polyphony = {};

(function() {

    /**
     * Module is a variable created by Emscripten and contains all of the
     * functions exported by Emscripten. It is used whenever we want to do
     * something with code generated by Emscripten.
     *
     * @var {object} Module
     */
    /* {{emscripten}} */

    ;(function() {
        "use strict";

        var cFuncs = {};
        cFuncs.otNewOp = Module.cwrap("ot_new_op", "number", []);
        cFuncs.otSkip = Module.cwrap("ot_skip", null, ["number", "number"]);
        cFuncs.otInsert = Module.cwrap("ot_insert", null, ["number", "string"]);
        cFuncs.otDelete = Module.cwrap("ot_delete", null, ["number", "number"]);
        cFuncs.otEncode = Module.cwrap("ot_encode", "string", ["number"]);
        cFuncs.otDecode = Module.cwrap("ot_decode", "number", ["number", "string"]);
        cFuncs.otSnapshot = Module.cwrap("ot_snapshot", "string", ["number"]);
        cFuncs.otNewClient = Module.cwrap("ot_new_client", "number", ["number", "number"]);
        cFuncs.otClientOpen = Module.cwrap("ot_client_open", null, ["number", "number"]);
        cFuncs.otClientReceive = Module.cwrap("ot_client_receive", null, ["number", "string"]);
        cFuncs.otClientApply = Module.cwrap("ot_client_apply", "number", ["number", "number"]);
        cFuncs.otNewServer = Module.cwrap("ot_new_server", "number", ["number", "number"]);
        cFuncs.otServerOpen = Module.cwrap("ot_server_open", null, ["number", "number"]);
        cFuncs.otServerReceive = Module.cwrap("ot_server_receive", null, ["number", "string"]);
        cFuncs.otNewDoc = Module.cwrap("ot_new_doc", "number", []);
        cFuncs.otServerGetDoc = Module.cwrap("ot_server_get_doc", "number", ["number"]);
        cFuncs.otDocGetComposed = Module.cwrap("ot_doc_get_composed", "number", ["number"]);
        cFuncs.otDocSetMaxSize = Module.cwrap("ot_doc_set_max_size", null, ["number","number"]);
        cFuncs.otClientSetId = Module.cwrap("ot_client_set_id", null, ["number", "number"]);
        polyphony.cFuncs = cFuncs;

        /* {{lib}} */

        function moduleExists() {
            return (typeof module !== "undefined" && module.exports);
        }

        if (moduleExists()) {
            module.exports = polyphony;
        }
    }());
}());
