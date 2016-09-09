<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

phonegap-template-csdk-image-editor
------------------------

[![Stories in Ready](https://badge.waffle.io/CreativeSDK/phonegap-template-csdk-image-editor.png?label=ready&title=Ready)](http://waffle.io/CreativeSDK/phonegap-template-csdk-image-editor)

This is a PhoneGap template to help you quickly get started with the Creative SDK Image Editor plugin.

### Contents

- [Prerequisites](#prerequisites)
- [Setup guide](#setup-guide)
- [Sample code](#sample-code)
- [Learn more](#learn-more)

# Prerequisites

**Required:** This guide will assume that you have followed the ["Prerequisites" section of the Creative SDK Client Auth plugin guide](https://github.com/CreativeSDK/phonegap-plugin-csdk-client-auth#prerequisites), particularly:

- install all software noted in that section
- receive a Creative SDK Client ID and Secret for each platform you plan to build for

# Setup guide

1. Create your app

	```
	phonegap create tempcsdk --template phonegap-template-csdk-image-editor
	```

1. Add your Creative SDK Client ID and Secret values

	Open `config.xml` and find the `<plugin name="phonegap-plugin-csdk-client-auth" ... >` element.

	You can add your Client ID and Secret values to the appropriate `variable`'s here.

1. Run `phonegap prepare` to fetch the plugins

1. **iOS only:** download and add the Creative SDK

	_(Android developers: this step is handled for you automatically by the plugin.)_

	To get the iOS SDK, go to the [Downloads page](https://creativesdk.adobe.com/downloads.html), click the download link for `STATIC FRAMEWORKS (DEPRECATED)`.

	Add the extracted `AdobeCreativeSDKFrameworks` folder to these directories:

		- `plugins/phonegap-plugin-csdk-client-auth/src/ios`
		- `plugins/phonegap-plugin-csdk-image-editor/src/ios`

1. Add the platforms you intend to build for:

	```
	phonegap platform rm ios
	phonegap platform rm android
	phonegap platform add ios
	phonegap platform add android
	```

	The remove is a precautionary step.

1. Run for your platform(s)

	```
	phonegap run ios
	phonegap run android
	```

# Sample code

You can find the relevant sample code in these files:

- `www/index.html`
- `www/js/index.js`

# Learn more

Want to learn more about the Creative SDK PhoneGap plugins used in this template?

The READMEs for the plugin repos contain Setup and API guides, as well as sample code, to help you learn quickly:

- [Client Auth](https://github.com/CreativeSDK/phonegap-plugin-csdk-client-auth): The starting point for all Creative SDK integrations
- [Image Editor UI](https://github.com/CreativeSDK/phonegap-plugin-csdk-image-editor): Powerful photo editing for mobile apps
