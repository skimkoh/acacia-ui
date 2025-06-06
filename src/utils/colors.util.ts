import { generate as antdGenerate, grey } from '@ant-design/colors'

export const generate = (color?: string, darken?: boolean) => {
    const colors = color ? antdGenerate(color, {
        theme: darken ? 'dark' : 'default'
    }) : []

    const neutral = antdGenerate(grey[0], {
        theme: darken ? 'dark' : 'default'
    })

    return { colors, neutral }
}