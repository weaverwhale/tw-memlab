# TW Memlab

Testing for memory leaks with memlab

## To Test

First, create a heapsnapshot, heapprofile, or heaptimeline file. Then run one of the following commands.

## Scenario

```bash
memlab run --scenario memlab_live.js --headful
```

@TODO write test for live site

## View Heap Snapshot

```bash
memlab view --snapshot heaps/heap.heapsnapshot
```

## Unbound Objects

```bash
memlab analyze unbound-object --snapshot-dir heaps/
```

## React Hooks

```bash
memlab analyze react-hooks --snapshot-dir heaps/
```