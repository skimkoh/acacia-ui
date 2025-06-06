import { theme } from 'antd'
import { PaletteToken } from './interfaces'

const { useToken } = theme

export const usePaletteToken = () => {
    const { token: antdToken } = useToken()
    const token = antdToken as PaletteToken

    return { token }
}
