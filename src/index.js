/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const formatFile = require('./formatFile');
const Promise = require('bluebird');
const glob = require('ultra-glob');

function formatGlob(pattern) {
  return glob(pattern).then(files => (
  Promise.all(files.map(filename => formatFile(filename)))
  ));
}

module.exports = formatGlob;
