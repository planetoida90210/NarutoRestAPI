import app from './app'
import {PORT} from './constants/narutoApi.constants'

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))