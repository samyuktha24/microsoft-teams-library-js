import { Utils } from '../utils';
import { meetingAudio } from '../../src/private/meetingAudio';

describe('meetingRoom', () => {
  const desktopPlatformMock = new Utils();

  beforeEach(() => {
    desktopPlatformMock.messages = [];
  });

  describe('toggleIncomingClientAudio', () => {
    it('should not allow calls before initialization', () => {
      expect(() =>
        meetingAudio.toggleIncomingClientAudio(() => {
          return;
        }),
      ).toThrowError('The library has not yet been initialized');
    });

    it('should successfully toggle the incoming client audio', () => {
      desktopPlatformMock.initializeWithContext('content');

      let callbackCalled = false;
      meetingAudio.toggleIncomingClientAudio(() => {
        callbackCalled = true;
      });

      let toggleIncomingClientAudioMessage = desktopPlatformMock.findMessageByFunc('toggleIncomingClientAudio');
      expect(toggleIncomingClientAudioMessage).not.toBeNull();
      desktopPlatformMock.respondToMessage(toggleIncomingClientAudioMessage, {});
      expect(callbackCalled).toBe(true);
    });
  });
});
