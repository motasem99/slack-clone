import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ChatInput = ({ channelName, channelId }) => {
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #Room`} />
        <Button hidden type='submit'>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div``;
