# TW Memlab

Testing for memory leaks with memlab

## To Test

Create a heapsnapshot, heapprofile, or heaptimeline file. Then run one of the following commands.

### Included package.json

There are also pre-configured commands in the package.json; this should provide some test scenarios for you ootb.

## Scenarios

```bash
memlab run --scenario memlab_live.js --headful
```

> @TODO write test for live site

### Check unbound collection growth (e.g., Map with growing number of entries)

```bash
memlab analyze unbound-collection 
Options: --snapshot-dir
```

### Analyze collections holding stale objects

```bash
memlab analyze collections-with-stale 
Options: --snapshot
```

### Get detached DOM elements

```bash
memlab analyze detached-DOM 
Options: --snapshot
```

### Get global variables in heap

```bash
memlab analyze global-variable 
Options: --snapshot
```

## Get properties inside an object

```bash
memlab analyze object 
Options: --snapshot --node-id
```

### Get objects with the most out-going references in heap

```bash
memlab analyze object-fanout 
Options: --snapshot
```

### Get objects by key and value, without recursing into sub-objects

```bash
memlab analyze object-shallow 
Options: --snapshot
```

### List the shapes that retained most memory

```bash
memlab analyze shape 
Options: --snapshot
```

### Get the largest objects in heap

```bash
memlab analyze object-size 
Options: --snapshot
```

## #Check unbound object growth (a single object with growing retained size)

```bash
memlab analyze unbound-object 
Options: --snapshot-dir
```

### Show a memory breakdown of the most memory-consuming React components and their React hooks. 

This works best with unminified heap snapshots taken from React apps running in Dev mode. But also supports minified heap snapshots taken from React apps in production mode.

```bash
memlab analyze react-hooks 
Options: --snapshot
```

### Get shapes with unbound growth (a class of objects with growing aggregated retained size)

```bash
memlab analyze unbound-shape 
Options: --snapshot-dir
```

### Find duplicated string instances in heap

```bash
memlab analyze string 
Options: --snapshot
```

### Get unmounted React Fiber nodes

```bash
memlab analyze unmounted-fiber-node 
Options: --snapshot
```
