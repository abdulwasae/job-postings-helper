<template>
    <v-container style="margin-bottom: 10vh;">
        <v-layout
                wrap
        >
            <v-flex xs12>
                <v-img
                        :src="require('../assets/logo_geniteam.png')"
                        my-2
                        contain
                        height="100"
                ></v-img>
            </v-flex>
            <v-flex text-xs-center
                    xs12
                    mb-4>
                <h1>Open Positions</h1>
            </v-flex>

            <template v-for="(jobposting, index) in jobpostings">
                <v-flex xs12 sm10 offset-sm1 pa-2 v-bind:key="index">
                    <v-card class="elevation-8 rounded-card">
                        <v-card-title>
                            <div>
                                <div class="headline">{{jobposting.data.title}}</div>
                                <span class="grey--text" style="font-size: medium">Experience: {{jobposting.data.experience}}</span>
                            </div>
                        </v-card-title>

                        <v-card-actions v-show="false">
                            <v-spacer></v-spacer>
                            <v-btn flat @click="show[jobposting.key] = !show[jobposting.key]">
                                See Details
                                <v-icon>{{ show[jobposting.key] ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                                </v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-slide-y-transition>
                            <div v-show="show[jobposting.key]">
                                <v-divider></v-divider>
                                <v-card-text style="font-size: medium;">
                                    {{jobposting.data.descriptionPre}}
                                    <ul>
                                        <template
                                                v-for="(descPoint, descPointIndex) in jobposting.data.descriptionPoints">
                                            <li v-bind:key="descPointIndex">{{descPoint}}</li>
                                        </template>
                                    </ul>
                                    {{jobposting.data.descriptionPost}}
                                    <br>
                                    <p style="font-weight: bold">
                                        To Apply, email us your resume at <span
                                            style="font-family: monospace; font-size: large">hr@geniteam.com</span> with
                                        subject: '{{jobposting.data.title}}'
                                    </p>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            :href="'mailto:hr@geniteam.com?subject=' + jobposting.data.title"
                                            flat
                                            color="green"
                                    >Apply
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </v-slide-y-transition>
                    </v-card>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    /* eslint-disable no-console */


    import firebase from '../Firebase'

    export default {
        name: 'JobPostings',
        data() {
            return {
                fields: {
                    title: {label: 'Title', sortable: true, 'class': 'text-left'},
                    actions: {label: 'Action', 'class': 'text-center'}
                },
                jobpostings: [],
                show: {}, //TODO: Watch mode needs to be 'deep' in order for stuff to react to it's state
                errors: [],
                ref: firebase.firestore()
                    .collection('jobPostings')
                    .where('active', '==', true)
                    .orderBy('title')
                ,
            }
        },
        created() {
            this.ref.onSnapshot((querySnapshot) => {
                this.jobpostings = [];
                this.show = {};
                querySnapshot.forEach((doc) => {
                    this.jobpostings.push({
                        key: doc.id,
                        data: doc.data()
                    });
                    this.show[doc.id] = true;
                });
            });
        },
        methods: {}
    }
</script>

<style>
    .rounded-card {
        border-radius: 12px;
    }

    .geni-elevation-8 {
        box-shadow: 0px 5px 5px -3px rgba(137, 195, 77, 0.2),
        0px 8px 10px 1px rgba(137, 195, 77, 0.14),
        0px 3px 14px 2px rgba(137, 195, 77, 0.12) !important;
    }
</style>
