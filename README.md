[![Build Status](https://travis-ci.org/DeltaGraphs/APSupervisor.svg?branch=master)](https://travis-ci.org/DeltaGraphs/APSupervisor)

[![Coverage Status](https://coveralls.io/repos/DeltaGraphs/APSupervisor/badge.svg?branch=master)](https://coveralls.io/r/DeltaGraphs/APSupervisor?branch=master)

# APSupervisor
APSupervisor is an instance of the Norris framework with the purpose of keeping track of the bus lines of a local bus company called APS.
The data is collected by polling their website with a certain request continuously on a fixed interval; the data is then adapted and shown on both a map, where the buses are displayed as markers, and a table, which contains a list of the buses IDs and of their terminus.
Both these charts are updated every time a chunk of data is collected: the markers move to their new positions, while table rows are added or updated as the buses reach their destination or as new buses are included in the data.
Each bus line has its own map and table; and it's possible to choose which line to display by simply selecting it on the combo box above the map.
