<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-8">
        <h4>Company Details.</h4>
        <b-form class="mt-5" @submit="onSubmitForm">
          <b-container fluid>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="inCompanyName"
                  label="Company Name:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="exampleInput1"
                  type="text"
                  v-model="form.companyName"
                  disabled
                  placeholder="Enter Company Name"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="incategory"
                  label="Type of Organization:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.category"
                  type="text"
                  required
                  placeholder="Enter Type of Organization"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="inCompanylogo"
                  label="Company Logo:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-file
                  v-model="cfile"
                  placeholder="Upload company logo here..."
                  accept="image/jpeg, image/png"
                  drop-placeholder="Drop file here..."
                ></b-form-file>
                <div class="mt-3">
                  Selected file: {{ cfile ? cfile.name : cfileName }}
                </div>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="inorganizationProfile"
                  label="Organization Profile:"
                  required
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-textarea
                  id="exampleInput1"
                  type="organizationProfile"
                  v-model="form.organizationProfile"
                  required
                  placeholder="Organization Profile"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  disabled
                  placeholder="Enter email"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="input-group-1"
                  label="Company Address:"
                  label-for="input-1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.companyAddress"
                  type="text"
                  required
                  placeholder="Enter Company Address"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="input-group-1"
                  label="Phone Number:"
                  label-for="input-1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.companyPhone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  required
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  disabled
                  placeholder="Enter email"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="input-group-1"
                  label="Website:"
                  label-for="input-1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.website"
                  type="url"
                  required
                  placeholder="Enter Website"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="inlinkedInProfile"
                  label="LinkedIn Profile:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.linkedInProfile"
                  type="url"
                  required
                  placeholder="Enter LinkedIn Profile"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="intwitterProfile"
                  label="Twitter Profile:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.twitterProfile"
                  type="text"
                  required
                  placeholder="Enter Twitter Profile"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="3">
                <b-form-group
                  id="infacebookProfile"
                  label="Facebook Profile:"
                  label-for="exampleInput1"
                ></b-form-group>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="input-1"
                  v-model="form.facebookProfile"
                  type="url"
                  required
                  placeholder="Enter Facebook Profile"
                ></b-form-input>
              </b-col>
            </b-row>

            <br />

            <div class="row">
              <div class="col-8">
                <h5>Job Openings</h5>
              </div>

              <div class="col-4 text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  v-b-modal.position-modal
                >
                  Add Position
                </button>
              </div>
            </div>
            <br />

            <b-row>
              <table class="table table-hover" v-if="positions.length != 0">
                <thead>
                  <tr>
                    <th scope="col">Position Type</th>
                    <th scope="col">Position Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(position, index) in positions" :key="index">
                    <td>{{ position.positionType }}</td>
                    <td>{{ position.positionTitle }}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="btn btn-warning btn-sm"
                          v-b-modal.position-update-modal
                          @click="editPosition(position)"
                        >
                          Update</button
                        >&nbsp;&nbsp;
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          @click="onDeletePosition(position)"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-row>
          </b-container>
          <br />
          <div class="control">
            <button type="submit" class="button is-dark is-fullwidth">
              Update Details
            </button>
          </div>
        </b-form>
      </div>

      <div class="col-1"></div>

      <div class="col-3">
        <h5>QrCode</h5>
        <br />
        <a :href="QrCode" download>
          <b-img :src="QrCode" fluid alt="Responsive image"></b-img>
        </a>
        <div class="control">
          <a :href="QrCode" download>
            <button type="submit" class="button is-dark">Download</button>
          </a>
        </div>
        <br />
        <br />
        <h5>BoothID</h5>
        <br />
        <h1>{{ boothid }}</h1>
        <br />
        <br />
        <h5>Request Beacon</h5>
        <br />
        <toggle-button
          v-model="beaconDeviceFlag"
          color="#159DFB"
          width="80"
          height="30"
          font-size="20"
          :labels="true"
          :sync="true"
          @change="updateStatus"
        />
        <br />
      </div>
    </div>

    <b-modal
      ref="addPositionModal"
      id="position-modal"
      title="Add a new Position"
      hide-footer
    >
      <b-form @submit="onSubmitAddPosition" @reset="onReset" class="w-100">
        <b-form-group
          id="form-title-group"
          label="Select Postion Type:"
          label-for="form-position-input"
        >
          <b-form-select
            v-model="addPositionForm.positionType"
            required
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="form-author-group"
          label="Job Title:"
          label-for="form-author-input"
        >
          <b-form-input
            id="form-author-input"
            type="text"
            v-model="addPositionForm.positionTitle"
            required
            placeholder="Enter Job Title"
          ></b-form-input>
        </b-form-group>
        <b-button-group>
          <b-button type="submit" variant="primary">Submit</b-button
          >&nbsp;&nbsp;
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      ref="editPositionModal"
      id="position-update-modal"
      title="Update"
      hide-footer
    >
      <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
        <b-form-group
          id="form-title-group"
          label="Select Postion Type:"
          label-for="form-position-input"
        >
          <b-form-select
            v-model="editForm.positionType"
            required
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="form-author-group"
          label="Job Title:"
          label-for="form-author-input"
        >
          <b-form-input
            id="form-author-input"
            type="text"
            v-model="editForm.positionTitle"
            required
            placeholder="Enter Job Title"
          ></b-form-input>
        </b-form-group>
        <b-button-group>
          <b-button type="submit" variant="primary">Update</b-button
          >&nbsp;&nbsp;
          <b-button type="reset" variant="danger">Cancel</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'dashboard',
  middleware: 'authentication',
  data() {
    return {
      form: {
        companyName: '',
        companyLogo: '',
        organizationProfile: '',
        email: '',
        website: '',
        linkedInProfile: '',
        twitterProfile: '',
        facebookProfile: '',
        category: '',
        companyAddress: '',
        companyPhone: '',
        fulltimepositions: '',
        parttimepositions: '',
        cooptimepositions: ''
      },
      selected: null,
      options: [
        { value: null, text: 'Select Position Type' },
        { value: 'Full Time', text: 'Full Time position' },
        { value: 'Part Time', text: 'Part Time position' },
        { value: 'Co-op', text: 'Co-op postion' }
      ],
      positions: [],
      addPositionForm: {
        id: '',
        positionType: '',
        positionTitle: null
      },
      message: '',
      showMessage: false,
      editForm: {
        id: '',
        positionType: '',
        positionTitle: null
      },
      QrCode: '',
      boothid: '',
      beaconDeviceFlag: { Type: Boolean, default: false },
      cfile: '',
      cfileName: ''
    }
  },
  methods: {
    initForm() {
      this.addPositionForm.positionType = ''
      this.addPositionForm.positionTitle = ''
      this.editForm.id = ''
      this.editForm.positionType = ''
      this.editForm.positionTitle = ''
    },
    getPositions() {
      return this.positions
    },
    onSubmitAddPosition(evt) {
      evt.preventDefault()
      this.$refs.addPositionModal.hide()
      var tempid = Math.floor(Math.random() * 100 + 1)
      const payload = {
        id: tempid,
        positionType: this.addPositionForm.positionType,
        positionTitle: this.addPositionForm.positionTitle
      }
      this.positions.push(payload)
      this.message = 'Positions added!'
      this.showMessage = true
      this.initForm()
    },
    onReset(evt) {
      evt.preventDefault()
      this.$refs.addPositionModal.hide()
      this.initForm()
    },
    editPosition(position) {
      this.message = position
      this.showMessage = true
      this.$refs.editPositionModal.show()
      this.editForm = position
    },
    onSubmitUpdate(evt) {
      evt.preventDefault()
      this.$refs.editPositionModal.hide()
      const payload = {
        id: this.editForm.id,
        positionType: this.editForm.positionType,
        positionTitle: this.editForm.positionTitle
      }
      var foundIndex = this.positions.findIndex((x) => x.id == this.editForm.id)
      this.positions[foundIndex] = payload
    },
    updatePosition(payload, bookID) {
      this.message = 'Positions updated!' + this.positions
      this.showMessage = true
    },
    onResetUpdate(evt) {
      evt.preventDefault()
      this.$refs.editPositionModal.hide()
    },
    removePosition(positionID) {
      console.log(positionID)
      var filtered = this.positions.filter(function(item) {
        return item.id !== positionID
      })
      console.log(filtered)
      this.positions = filtered
      this.message = 'Position removed!'
      this.showMessage = true
    },
    onDeletePosition(position) {
      this.removePosition(position.id)
    },
    async onSubmitForm(evt) {
      evt.preventDefault()
      //Full TIme
      const fulltimeData = this.positions.filter(
        ({ positionType }) => positionType === 'Full Time'
      )
      var resultFullTimeArray = []
      var formattedarray = fulltimeData.map(function(obj, index, arr) {
        var resultFData = obj.positionTitle
        resultFullTimeArray.push(resultFData)
      })
      var tempFullTime = resultFullTimeArray

      //Part-Time
      const parttimeData = this.positions.filter(
        ({ positionType }) => positionType === 'Part Time'
      )
      var resultPartTimeArray = []
      var formattedParray = parttimeData.map(function(obj, index, arr) {
        var resultPData = obj.positionTitle
        resultPartTimeArray.push(resultPData)
      })
      var tempPartTime = resultPartTimeArray

      //Co-op
      const CoopData = this.positions.filter(
        ({ positionType }) => positionType === 'Co-op'
      )
      var resultCoopArray = []
      var formattedarray = CoopData.map(function(obj, index, arr) {
        var resultcData = obj.positionTitle
        resultCoopArray.push(resultcData)
      })
      var tempCoopTime = resultCoopArray
      /*
      this.message =
        'FullTIme' +
        tempFullTime.join('|') +
        '---PartTime' +
        tempPartTime.join('|') +
        '---Coop' +
        tempCoopTime.join('|')
      */
      const formData = new FormData()
      formData.append('companyLogo', this.cfile)
      formData.append('organizationProfile', this.form.organizationProfile)
      formData.append('website', this.form.website)
      formData.append('linkedInProfile', this.form.linkedInProfile)
      formData.append('twitterProfile', this.form.twitterProfile)
      formData.append('facebookProfile', this.form.facebookProfile)
      formData.append('category', this.form.category)
      formData.append('companyAddress', this.form.companyAddress)
      formData.append('companyPhone', this.form.companyPhone)
      formData.append('fulltimepositions', tempFullTime.join('|'))
      formData.append('parttimepositions', tempPartTime.join('|'))
      formData.append('cooptimepositions', tempCoopTime.join('|'))
      var email = this.$store.state.userDetail.email
      try {
        console.log(this.form.organizationProfile + this.cfile.name)
        await this.$axios.post(
          '/companyDetail/update/' + email,
          formData
          /*{
            organizationProfile: this.form.organizationProfile,
            website: this.form.website,
            linkedInProfile: this.form.linkedInProfile,
            twitterProfile: this.form.twitterProfile,
            facebookProfile: this.form.facebookProfile,
            category: this.form.category,
            companyAddress: this.form.companyAddress,
            companyPhone: this.form.companyPhone,
            profile: this.form.profile,
            fulltimepositions: tempFullTime.join('|'),
            parttimepositions: tempPartTime.join('|'),
            cooptimepositions: tempCoopTime.join('|'),
            employmentType: this.form.employmentType,
            location: this.form.location
          },
          */
          //formData
        )

        this.$toast('Record updated Successfully', {
          color: 'green',
          y: 'left',
          dismissable: true,
          queueable: true
        })
        this.positions = []
        this.getData()
      } catch (e) {
        console.log(e)
      }
      /*
      this.$toast('Record updated Successfully', {
        color: 'green',
        y: 'left',
        dismissable: true,
        queueable: true
      })
      */
      //this.showMessage = true
    },
    onResetForm(evt) {
      evt.preventDefault()
    },
    async updateStatus() {
      await this.$axios
        .post(
          '/register/updateBeaconStatus/' +
            this.boothid +
            '/' +
            this.beaconDeviceFlag
        )
        .then(
          (response) => {
            this.getData()
            this.$toast('Beacon device Requested.', {
              color: 'red',
              y: 'top',
              dismissable: true,
              queueable: true
            })
          },
          (error) => {
            this.$toast('Error while making request.', {
              color: 'red',
              y: 'top',
              dismissable: true,
              queueable: true
            })
          }
        )
    },
    async getData() {
      var email = this.$store.state.userDetail.email
      let data = await this.$axios.post('/register/getinfo/' + email)
      this.form = data.data[0]
      if (data.data[0].fulltimepositions != 0) {
        var tempid = Math.floor(Math.random() * 100 + 1)
        var pos = data.data[0].fulltimepositions.split('|')
        for (var i = 0; i < pos.length; i++) {
          var d = pos[i].split(',')
          const rawdata = {
            id: tempid,
            positionType: 'Full Time',
            positionTitle: d[0]
          }
          this.positions.push(rawdata)
        }
      }
      //Part Time
      if (data.data[0].parttimepositions != 0) {
        var tempid = Math.floor(Math.random() * 100 + 1)
        var pos = data.data[0].parttimepositions.split('|')
        for (var i = 0; i < pos.length; i++) {
          var d = pos[i].split(',')
          const rawdata = {
            id: tempid,
            positionType: 'Part Time',
            positionTitle: d[0]
          }
          this.positions.push(rawdata)
        }
      }
      // Co-op
      if (data.data[0].cooptimepositions != 0) {
        var tempid = Math.floor(Math.random() * 100 + 1)
        var pos = data.data[0].cooptimepositions.split('|')
        for (var i = 0; i < pos.length; i++) {
          var d = pos[i].split(',')
          const rawdata = {
            id: tempid,
            positionType: 'Co-op Time',
            positionTitle: d[0]
          }
          this.positions.push(rawdata)
        }
      }
      this.cfileName = data.data[0].companyLogo.substring(52)
      console.log(this.cfileName)
      this.form.companyLogo = data.data[0].companyLogo
      this.QrCode = data.data[0].qrcode
      this.boothid = data.data[0].boothId
      this.beaconDeviceFlag = data.data[0].beaconDeviceFlag
    }
  },
  created() {
    this.getData()
    console.log(this.$store.state.userDetail.email)
  }
}
</script>
