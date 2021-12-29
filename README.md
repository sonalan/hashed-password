# Hashed Password

A simple package to hash passwords and verify if the password and hash match

## Installation
```
yarn add hashed-password
```

## Ussage
```javascript 
import { validatePassword, hashPassword } from "hashed-password"

const {hash, salt} = hashPassword("YOUR PASSWORD");

const isValid = validatePassword("YOUR PASSWORD", salt, hash); 
 
``` 
 
## Functions

<dl>
<dt><a href="#validatePassword">validatePassword(inputPassword, salt, storedHash)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given an input password a salt and an hash
Does the given password mathc with the hash</p>
</dd>
<dt><a href="#hashPassword">hashPassword(password)</a> ⇒ <code><a href="#HashAndSalt">HashAndSalt</a></code></dt>
<dd><p>Given a Password and hash it with a salt, then return the hash and the salt</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#HashAndSalt">HashAndSalt</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="validatePassword"></a>

## validatePassword(inputPassword, salt, storedHash) ⇒ <code>boolean</code>
Given an input password a salt and an hash
Does the given password mathc with the hash

**Kind**: global function  
**Returns**: <code>boolean</code> - does hash(input Password + salt ) === storedHash?  

| Param | Type |
| --- | --- |
| inputPassword | <code>string</code> | 
| salt | <code>string</code> | 
| storedHash | <code>string</code> | 

<a name="hashPassword"></a>

## hashPassword(password) ⇒ [<code>HashAndSalt</code>](#HashAndSalt)
Given a Password and hash it with a salt, then return the hash and the salt

**Kind**: global function  
**Returns**: [<code>HashAndSalt</code>](#HashAndSalt) - object containing the hash and the salt usedP  

| Param | Type |
| --- | --- |
| password | <code>string</code> | 

<a name="HashAndSalt"></a>

## HashAndSalt : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hash | <code>string</code> | The hash we got |
| salt | <code>string</code> | The salt used for hashing |