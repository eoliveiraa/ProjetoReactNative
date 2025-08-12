import {Pressable} from 'react-native'

export const Botao = ({tituloBotao}) => {
    return (
        <Pressable style={style.Botao}>
            <Text style={styles.textoBotao}>{tituloBotao}</Text>
        </Pressable>
    )
}