# locklift-inheritance-error
Proof of error


For version: "0.70.0"

```
npx locklift build
```

return:

```
[ERROR]  path: /root/git/locklift-inheritance-error/contracts/alice.tsol, contractFile: alice. error: Error: Source "IAlice.tsol" not found: File not found. Searched the following locations: "/root/git/locklift-inheritance-error/.", "/root/git/locklift-inheritance-error/node_modules".
 --> contracts/alice.tsol:5:1:
```


For version 66 it's works