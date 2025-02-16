# Setting Up a TypeScript Project with `ts-node` as a REPL

## 1. Initialize a New Node.js Project
Run the following command to create a `package.json` file:
```sh
npm init -y
```

## 2. Install TypeScript and ts-node
```sh
npm i --save-dev typescript ts-node
```

## 3. Initialize a TypeScript Config File
```sh
npx tsc --init
```

### 4. Ensure these options are set in the tsconfig.json file
```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## 5. Create ts file and run it using ts-node
```sh
npx ts-node index.js
```