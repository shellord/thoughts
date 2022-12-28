import React from 'react';
import {
  View,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tw from '~/lib/tailwind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNKeyboardAvoidingView from './ui/RNKeyboardAvoidingView';
import StatusBarGap from './ui/StatusBarGap';
import Font from './ui/Font';
import Button from './ui/Button';
import Divider from './ui/Divider';
import {useCreatePostMutation} from '~/generated/graphql';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

type AddPostProps = {
  onClose: () => void;
  onPost: (text: string) => void;
};

const AddPost: React.FC<AddPostProps> = ({onClose, onPost}) => {
  const inputRef = React.useRef<TextInput>(null);
  const [postText, setPostText] = React.useState<string>('');

  const onPostHandler = () => {
    if (postText.length === 0) {
      return;
    }
    onPost(postText);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={tw`flex-1 bg-gray-700 p-5 justify-between`}>
      {/* Top Section */}
      <View>
        <View style={tw`justify-between items-center flex-row`}>
          <Font className="text-lg font-semibold">Post a thought</Font>
          <Pressable style={tw`items-end`} onPress={onClose}>
            <Ionicons name="ios-close" size={30} color="#fff" />
          </Pressable>
        </View>
        <View style={tw`mt-4`} />
        <Divider />
        <View style={tw`mt-4`} />
        <View>
          <TextInput
            ref={inputRef}
            multiline
            style={tw`text-white text-lg`}
            placeholder="Add a new post"
            placeholderTextColor={'#676767'}
            value={postText}
            onChangeText={setPostText}
          />
        </View>
      </View>
      {/* Bottom Section*/}
      <View>
        <View style={tw`items-end`}>
          <TouchableOpacity onPress={onPostHandler}>
            <Button title="Post" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PostModal: React.FC<Props> = ({isVisible, onClose}) => {
  const [createPost] = useCreatePostMutation({
    onCompleted: () => {
      onClose();
    },
  });

  const onPost = (text: string) => {
    createPost({
      variables: {
        content: text,
      },
      refetchQueries: ['CurrentUserPosts'],
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <StatusBarGap />
      <View style={tw`mt-1`} />
      <RNKeyboardAvoidingView>
        <View style={tw`w-full h-full rounded-xl overflow-hidden`}>
          <AddPost onClose={onClose} onPost={onPost} />
        </View>
      </RNKeyboardAvoidingView>
    </Modal>
  );
};

export default PostModal;
