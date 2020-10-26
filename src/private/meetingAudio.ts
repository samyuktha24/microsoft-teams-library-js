import { ensureInitialized, sendMessageRequestToParent } from '../internal/internalAPIs';
import { GlobalVars } from '../internal/globalVars';

export namespace meetingAudio {
  /**
   * @private
   * Hide from docs
   * ------
   * Allows an app to toggle the audio speaker settings from mute to unmute or vice-versa
   * @param callback The callback to invoke when the value is retrieved.
   */
  export function toggleIncomingClientAudio(callback: (isSpeakerMuted: boolean) => void): void {
    ensureInitialized();
    const messageId = sendMessageRequestToParent('toggleIncomingClientAudio');
    GlobalVars.callbacks[messageId] = callback;
  }
}
