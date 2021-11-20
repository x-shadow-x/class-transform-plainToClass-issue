# phapi-core-apps

Application Service

## run repo

```
yarn install
husky install // this one is for adding husky.sh
```

## insert seed data in aws ES

you can run the below cmd to insert seed data in aws ES(need to connect to the new infrastructure VPN by wireguard first):
`./ph insert-remote-ES {es-endpoint} {username:password}`
tip:

1. If there are special characters in the password, you need to escape it with `\`
2. Please ensure that the relevant index has been cleaned up before inserting data
