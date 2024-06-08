# Ellisthémon Modpack

Welcome to the Ellisthémon 1.20 Fabric modpack. The theme: Pokémon! It's a minimal Vanilla+ ish modpack in addition to the Cobblemon mod.

The main mods in this pack are:
* Cobblemon (+addons)
* Minimap + world map (Xaero's minimap and world map)
* Backpack (Inmis)
* Bigger chests (Iron Chests)
* Storage system (Tom's Simple Storage)
* A backport of the Vanilla Crafter block
* A Fabric port of Effortless Building

There are a few other QoL or utility mods, including a craftable chunk loader.

The modpack is heavily based on the [official Cobblemon pack](https://modrinth.com/modpack/cobblemon-fabric), and includes all their cool menus etc.

## Modpack

[Download current modpack](https://github.com/Ellisthion/minecraft-cobblemon-1.20/releases/latest)

# Client Setup

## Fresh Install

### Set up launcher

1. Get your modded launcher. I recommend [Prism Launcher](https://prismlauncher.org/), but the [Modrinth Launcher](https://modrinth.com/app) should also work.
2. You may need to point it at your Java instance, Java 17 or higher probably. If you've already installed Minecraft vanilla, it will have installed Java... somewhere. The standard launcher puts things in AppData or something. If you run vanilla, Task Manager will show the javaw.exe process for Minecraft, and you can use Open File Location to find it.
3. Go to Settings -> Java
4. Increase both the min and max memory allocation. They should be the same. I put 8192 MB in both fields.
4. Specify JVM arguments to reduce stutter from the garbage collector. Paste the entire thing below into box.

Recommended JVM arguments:
```
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRSHotCardLimit=16 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:GCTimeRatio=99
```

### Set up instance

We are using a modpack file to automatically set up your modded Minecraft instance, including the Fabric mod loader.

Each instance is treated as totally separate so things like graphics settings and controls aren't copied between, unfortunately.

1. Click Add Instance
2. Choose import, and import the latest modpack mrpack file
3. It should automatically download all the mods and set up the instance
4. Once it's ready, click Launch

## Updating

Updating is currently a little fiddly.

1. In Prism Launcher, create a new instance, importing the new modpack file

That's sorta it. You can just use that new instance. But if you want to keep your options:

1. In your original instance, DELETE your `config`, `mods`, `kubejs`, and folders
2. Copy in those folders from the new instance

# Server Setup

## Fresh Server

1. Set up a Fabric server for Minecraft `1.20.1`
2. Copy the following folders from the client instance:
    * `mods`
    * `config`
    * `kubejs`
3. DELETE the following mods from the `mods` folder:
    * `DistantHorizons`
4. Copy the Cobbled Farms save from the `saves` folder into the server's `world` folder

Adjust your java args. The "best" arguments are hotly discussed, but I'd recommend as follows. These are DIFFERENT to the client args.

```
-server -Xmx8G -Xms8G -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRSHotCardLimit=16 -XX:G1ConcRefinementServiceIntervalMillis=150
```


You can tweak the first couple of params for different RAM. You want the Xms and Xmx (min and max) to be equal.

Launch the server. It should "just work". If it doesn't, complain bitterly on WhatsApp.

## Updating

1. DELETE and re-add the following folders:
    * `mods`
    * `config`
    * `kubejs`
2. DELETE the following mods from the `mods` folder:
    * `DistantHorizons`

If I've tested the update correctly, it should "just work". If it doesn't, complain bitterly on WhatsApp.
