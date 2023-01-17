import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setMessage } from '../../store/reducers/message'

const MessageComponent = () => {
  const dispatch = useDispatch()
  const { message } = useSelector((state: RootState) => state.message)

  const handlePress = () => {
    dispatch(setMessage('Message from Component'))
  }

  return (
    <View>
      <Text>{message}</Text>
      <Button icon="camera" mode="contained" onPress={handlePress}>
        Press me
      </Button>
    </View>
  )
}

export default MessageComponent
