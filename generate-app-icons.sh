#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

npx sharp -i ./images/logo.png -o ./public/logo/logo.png resize 1024
npx sharp -i ./images/logo.png -o ./public/icons/favicon.png resize 1024
npx sharp -i ./images/logo.png -o ./public/favicon.ico resize 1024

npx sharp -i ./images/logo.png -o ./public/icons/favicon-16x16.png resize 16
npx sharp -i ./images/logo.png -o ./public/icons/favicon-32x32.png resize 32
npx sharp -i ./images/logo.png -o ./public/icons/favicon-96x96.png resize 96
npx sharp -i ./images/logo.png -o ./public/icons/favicon-512x512.png resize 512
npx sharp -i ./images/logo.png -o ./public/icons/favicon-384x384.png resize 384
npx sharp -i ./images/logo.png -o ./public/icons/favicon-256x256.png resize 256
npx sharp -i ./images/logo.png -o ./public/icons/favicon-192x192.png resize 192
npx sharp -i ./images/logo.png -o ./public/icons/favicon-144x144.png resize 144
npx sharp -i ./images/logo.png -o ./public/icons/favicon-48x48.png resize 48
npx sharp -i ./images/logo.png -o ./public/icons/favicon-180x180.png resize 180
npx sharp -i ./images/logo.png -o ./public/icons/favicon-152x152.png resize 152
npx sharp -i ./images/logo.png -o ./public/icons/favicon-120x120.png resize 120
npx sharp -i ./images/logo.png -o ./public/icons/favicon-114x114.png resize 114
npx sharp -i ./images/logo.png -o ./public/icons/favicon-76x76.png resize 76
npx sharp -i ./images/logo.png -o ./public/icons/favicon-72x72.png resize 72
npx sharp -i ./images/logo.png -o ./public/icons/favicon-60x60.png resize 60
npx sharp -i ./images/logo.png -o ./public/icons/favicon-57x57.png resize 57