<script setup lang="ts">
import MemberHeader from './MemberHeader.vue'
import MemberRow from './MemberRow.vue'
import { ref, onMounted,Ref } from 'vue';
import { MemberEntity } from './model/memberEntity';
import { fetchMembersAsync } from './api/index'
// import { members } from './api/member';

const membersRef: Ref<MemberEntity[]> = ref([])
onMounted(async() => {
    const data = await fetchMembersAsync()
    membersRef.value = data
        // .then(items => {
        //     members.value = items
        // })
    // membersRef.value = members
})
</script>

<template>
    <div class="row">
        <h2>Members Page</h2>
        <table class="table">
            <thead>
                <MemberHeader/>
            </thead>
            <tbody>
                <MemberRow
                    v-for="member in membersRef"
                    :key="member.id"
                    :member="member"
                />
                <!-- <tr v-for="member in membersRef" :key="member.id">
                    <td><img :src="member.avatar_url"></td>
                    <td>{{ member.id }}</td>
                    <td>{{ member.login }}</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>
