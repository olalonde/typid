# typid

Simple Stripe like IDs, non sortable. Defaults to 80 bits of randomness[^1] (12-14 characters).

```typescript
import typid from "typid";
const id = typid("user");
// => user_5ozBxXrc2vRXiQ
const privateKey = typid("pk", 128);
```

[^1] [On average](https://math.stackexchange.com/a/2398739/3965), it takes around 22 trillion generated IDs to [get a duplicate](https://www.wolframalpha.com/input?i=Integrate%5B%281+%2B+x%2F%282%5E90%29%29%5E%282%5E90%29+*+Exp%5B-x%5D%2C+%7Bx%2C+0%2C+Infinity%7D%5D).
