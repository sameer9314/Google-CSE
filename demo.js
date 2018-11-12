// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
require('dotenv').config()
'use strict';

// Example:  node customsearch.js example_term

const {google} = require('googleapis');
const customsearch = google.customsearch('v1');

// Ex: node customsearch.js
//      "Google Node.js"
//      "API KEY"
//      "CUSTOM ENGINE ID"

async function runSample(options) {
  console.log(options);
  const res = await customsearch.cse.list({
    cx: options.cx,
    q: options.q,
    auth: options.apiKey,
  });
  console.log(res.data.items[0].link);
  console.log(res.data.items[0].snippet);
  console.log(res.data.items[0].htmlSnippet);


 // console.log(res.data.queries.request[0]);
  return res.data;
}
//********************************************** */
if (module === require.main) {
  // You can get a custom search engine id at
  // https://www.google.com/cse/create/new
  const options = {
    q: 'Salmaan Khaan',
    apiKey: process.env.CSE_API_KEY,
    cx: process.env.cx,
  };
  runSample(options).catch(console.error);
}

module.exports = {
  runSample,
};