const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000
const FILE_LOC = path.join(__dirname, 'bike_stations.json')

app.use(cors())
app.use(express.json())

function loadStations() {
    return JSON.parse(fs.readFileSync(FILE_LOC, 'utf8'))
}

function saveStations(stations) {
    fs.writeFileSync(
        FILE_LOC,
        JSON.stringify(stations, null, 4)
    )
}

app.get('/api', (req, res) => {
    res.status(200).json(loadStations())
})

app.put('/api/:id', (req, res) => {
    const stations = loadStations()

    const stationId = Number(req.params.id)
    const action = req.body.action

    const station = stations.find(
        item => Number(item.id) === stationId
    )

    if (!station) {
        res.sendStatus(400)
        return
    }

    if (action === 'rent') {
        if (station.available_bikes > 0) {
            station.available_bikes--
            station.available_docks++

            saveStations(stations)

            res.status(200).json({
                message: 'Bike rented successfully'
            })
        } else {
            res.sendStatus(400)
        }

        return
    }

    if (action === 'return') {
        if (station.available_docks > 0) {
            station.available_bikes++
            station.available_docks--

            saveStations(stations)

            res.status(200).json({
                message: 'Bike returned successfully'
            })
        } else {
            res.sendStatus(400)
        }

        return
    }

    res.sendStatus(400)
})

app.listen(PORT, '127.0.0.1', () => {
    console.log(
        `Server running at http://127.0.0.1:${PORT}`
    )
})