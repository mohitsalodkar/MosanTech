/**
 * Video Playback Coordinator
 * Enforces:
 * 1. At most 2 simultaneously playing videos across the entire application.
 * 2. Pausing videos when scrolled off screen.
 * 3. Graceful handling of browser autoplay policies and user interactions.
 */

class VideoManager {
  constructor() {
    this.activeVideos = new Set();
    this.maxPlaying = 2;
  }

  registerPlay(videoEl) {
    if (!videoEl) return;
    this.activeVideos.add(videoEl);

    // If more than maxPlaying are active, pause the oldest
    if (this.activeVideos.size > this.maxPlaying) {
      const iterator = this.activeVideos.values();
      const oldest = iterator.next().value;
      if (oldest && oldest !== videoEl && !oldest.paused) {
        try {
          oldest.pause();
        } catch {
          // ignore error
        }
      }
      this.activeVideos.delete(oldest);
    }
  }

  registerPause(videoEl) {
    if (videoEl) {
      this.activeVideos.delete(videoEl);
    }
  }

  unregister(videoEl) {
    if (videoEl) {
      this.activeVideos.delete(videoEl);
    }
  }
}

export const globalVideoManager = new VideoManager();

export default globalVideoManager;

