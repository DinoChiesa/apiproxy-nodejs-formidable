# Demonstration of nodejs + formidable within Apigee Edge

This api proxy demonstrates the use of the npm module 'formidable' within the nodejs code in a hosted target in Apigee Edge. There is also some legacy code that shows the use of this module within a nodejs target; Apigee recommends that you use hosted targets.

## Disclaimer

This example is not an official Google product, nor is it part of an official Google product.


## To use it

1. deploy the API proxy to your Apigee Edge org/env

2. invoke it in a web browser as https://$ORG-$ENV.apigee.net/hosted-formidable

3. fill out the resulting form

4. observe the results.


## Warning

The version of this API Proxy that uses the nodejs target is not suitable to operate a general purpose file uploader.
Uploading large files in a high-scale manner into Apigee Edge Message PRocessors may have an adverse effect on stability and reliability of the service.

You must take care to "garbage collect" the uploaded files.  Delete them after a short while. Do not allow them to accumulate.

If you wish to upload large numbers of files, you should use a separate, standalone nodejs hosting environment, like Google App Engine, or Google Compute Engine. The hosted target does that.

