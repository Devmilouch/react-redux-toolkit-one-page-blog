import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

import { fetchUsers } from './features/users/usersSlice';
import { useStore } from 'react-redux';

function App() {
  const store = useStore();
  store.dispatch(fetchUsers());
  
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
