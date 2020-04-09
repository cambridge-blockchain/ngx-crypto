# Ngx Crypto Service

[![npm version](https://badge.fury.io/js/%40cambridge-blockchain%2Fngx-crypto.svg)](https://badge.fury.io/js/%40cambridge-blockchain%2Fngx-crypto)

For the ngx-crypto angular service see
[./projects/ngx-crypto](./projects/ngx-crypto/README.md)

## Publishing a new npm package version

```bash
# Make sure you publish the library version, not the workspace
$ cd projects/ngx-crypto

# Chose one of the following command
$ VERSION=$(npm version major)     # X+1.Y.Z
$ VERSION=$(npm version minor)     # X.Y+1.Z
$ VERSION=$(npm version patch)     # X.Y.Z+1

$ git add . && git commit -m "${VERSION}"

$ git tag -s ${VERSION} -m ""

$ git push && git push --tags
```

Go to https://github.com/cambridge-blockchain/ngx-crypto/releases
and create a release for the newly created tag \${VERSION}. This
will trigger a Github Action that published this new version to
https://www.npmjs.com/package/@cambridge-blockchain/ngx-crypto
