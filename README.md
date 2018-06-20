# Demonstration of nodejs + formidable within Apigee Edge nodejs target

This api proxy demonstrates the use of the npm module 'formidable' within the nodejs code in a node target in Apigee Edge.

## Disclaimer

This example is not an official Google product, nor is it part of an official Google product.

## Warning

This API Proxy is not suitable to operate a general purpose file uploader.
Uploading large files in a high-scale manner into Apigee Edge Message PRocessors may have an adverse effect on stability and reliability of the service.

You must take care to "garbage collect" the uploaded files.  Delete them after a short while. Do not allow them to accumulate.

If you wish to upload large numbers of files, you should use a separate, standalone nodejs hosting environment, like Google App Engine, or Google Compute Engine.

