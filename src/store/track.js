import { defineStore } from 'pinia'
import tracksApi from '@/api/tracks'

export const useTrack = defineStore('track', {
  state: () => ({
    current: {},
    list: [],
    currentIndex: 0,
    search: 'lofi',
    isLoading: false
  }),
  actions: {
    onNextTrack() {
      this.currentIndex += 1
      this.current = this.list[this.currentIndex]
    },

    async getTracks(params) {
      try {
        this.isLoading = true
        const { results, headers } = await tracksApi.getTracks({ ...params, search: this.search })
        this.list = results

        return  { results, headers }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async loadTracks(params) {
      try {
        this.isLoading = true
        const { results, headers } = await tracksApi.getTracks({ ...params, search: this.search })
        this.list.push(...results)

        return  { results, headers }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})