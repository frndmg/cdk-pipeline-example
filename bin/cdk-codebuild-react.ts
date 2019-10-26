#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkCodebuildReactStack } from '../lib/cdk-codebuild-react-stack';

const app = new cdk.App();
new CdkCodebuildReactStack(app, 'CdkCodebuildReactStack');
