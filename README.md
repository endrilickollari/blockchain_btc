# Bitcoin address transaction

To run application you can use Docker.
Get files from GitHub.
In app directory run:
```
docker build -f .\Dockerfile -t [image-name] .
```
After that run:

```
docker run -d -p [port]:80 [image-name]
```

After running last step you can access the application at http://localhost:[port].

Also you can find demo [here](https://btc-blockchain-list.netlify.app).