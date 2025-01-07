import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/container/container'
import { colors, fontSize } from '@/constants/token'

export default function PolicyScreen() {
	return (
		<ScrollView>
			<Container>
				<View style={styles.page}>
					<Text style={styles.para}>
						Best of Rome Tour. with a registered office in Via Borgo Vittorio 38, fiscal code and
						number of registration No. 17223631007 (Best of Rome Tour or We) in its quality of “Data
						controller” processes the personal data of the subjects involved in the processing
						(hereinafter, “Data subject”) and in particular of the customers that use and access the
						BIRT App (the App) and the website www.bestinrometour.com (the Website). On the App and
						on the Website the Data are provided directly by the Data subject or by the person
						exercising parental authority on the Data subject, for the following purposes: a)
						management of the access and use of the relevant services; b) requirements related to
						the purchase on the Website of mobile travel guide digital content and/or travel
						tickets; c) statistical purposes on anonymised data. On the Website the Data are
						provided directly also for the following purposes provided the Data subject grants
						his/her consent: d) delivery of customer satisfaction surveys or questionnaires with
						regards to Best of Rome Tour products and services. The legal basis for data processing
						is the execution of a contract (for the purposes under point a), b), and c) above), and
						the Data subject’s consent (for the purposes under point. d)).
					</Text>

					<Text style={styles.para}>
						2. Best of Rome Tour hereby informs you that - for the above-mentioned purposes the Data
						shall be processed also by computer, telematics, paper and manual instruments, in
						compliance with the confidentiality and safety rules provided by the law.
					</Text>

					<Text style={styles.para}>
						3. The provision of the Data is optional. Any refusal to provide the Data for the
						purposes relating to the use and access to the App and/or Website, referred to under
						paragraph 1 lett. a), and b) shall lead to the impossibility to enjoy the related
						services offered by Best of Rome Tour. Also, a subsequent possible opposition or
						revocation of the processing of personal data for the aforementioned purposes shall
						result in the immediate blocking of the supply of the services offered through the App
						and/or Website.
					</Text>
					<Text style={styles.para}>
						4. The Data shall not be disseminated. Within the organization of the Data controller,
						the Data may be processed by the relevant offices entrusted with the execution of
						certain processing activities (i.e., Administration, IT). In the performance of its
						activities and of its information, cultural, profiling, merchandising, Best in Rome
						Tour, in its quality of Data controller, may communicate the Data to the third parties
						mentioned in Footnote 1 and appointed as Data Processor for the purposes of managing the
						Registration and the provision to the related services or for any further purposes to
						which the Data subject has agreed. The complete list of Data Processors appointed by
						Best of Rome Tour can be easily known at no charge by sending a request to the email
						address indicated under paragraph 7 of this Privacy Notice.
					</Text>
					<Text style={styles.para}>
						5. The Data shall be stored on servers located within the European Union. Any Data
						collected for the purposes indicated under paragraph 1 (a) shall be retained for the
						entire duration of the Data subject’s Registration to Best of Rome Tour’s Website or
						App. Any Data collected for the purposes indicated under paragraph 1 (b) shall be
						retained for the period of time that is necessary to the provision of the purchased
						services, and subsequently for no longer than the statutory limitation period.
					</Text>
					<Text style={styles.para}>
						6. The Data subject has the right to: a) obtain the termination of processing for direct
						marketing purposes, also in relation to services identical to those already provided by
						our company; b) obtain information in relation to the purposes for which Data are
						processed, to the period of processing and to the subjects to whom the data are
						communicated (right of access); c) obtain the rectification or integration of incorrect
						Data concerning the Data subject (right to rectification); d) obtain the deletion of
						Data concerning the Data subject in the following cases (i) the data are no longer
						necessary for the purposes for which they were collected; (ii) the Data subject has
						withdrawn his/her consent to the processing of Data, if these are processed on the basis
						of his consent; (iii) the Data subject has opposed the processing of Data concerning
						him/her, in case these are processed for our legitimate interest; or (iv) the processing
						of Data does not comply with the law. However, it is to be noted that the retention of
						Data by Best of Rome Tour is also lawful if it is necessary in order to fulfil a legal
						obligation or to ascertain, exercise or defend a right in Court (cancellation right); e)
						to obtain that the Data concerning the Data subject are only stored without any further
						use in the following cases: (i) the Data subject disputes the accuracy of the Data, for
						the period that is necessary for allowing Best of Rome Tour to verify the accuracy of
						such Data; (ii) the processing is unlawful but the Data subject objects to the deletion
						of the Data; (iii) the Data are necessary for ascertaining, exercising or defending a
						right in Court; (iv) the Data subject has opposed the processing and is awaiting the
						verification of the possible prevalence of Best of Rome Tour’s legitimate interest to
						the processing (limitation right); f) receive in a common, structured, commonly used and
						machine-readable format, all Data concerning the Data subject, if these are processed
						under a contract or on the basis of the Data subject’s consent (portability right).
					</Text>
					<Text style={styles.para}>
						7. The Data controller pursuant to art. 24 of the GDPR is BEST of ROME TOUR with a
						registered office in Via Borgo Vittorio 38, fiscal code and number of registration No.
						17223631007. The Data controller can be contacted for any requests or reports at the
						following contact details: <Text style={styles.contact}>contact@bestinrometour.com</Text>.
					</Text>
					<Text style={styles.para}>
						The Data controller has appointed a Data Protection Officer pursuant to sec. 37, 38 and
						39 of the GDPR, which is domiciled for the position at the address Via Borgo Vittorio
						38, and can be contacted at the email address <Text style={styles.contact}>contact@bestinrometour.com</Text> for any matter
						concerning the Data processing.
					</Text>
					<Text style={styles.para}>
						By sending an email to <Text style={styles.contact}>contact@bestinrometour.com</Text> the Data subject can also exercise any
						rights referred to under paragraph 6 of this Privacy Notice.
					</Text>
					<Text style={[styles.para, {marginBottom: 20}]}>
						Footnote 1: tourism organizations, museums, hotels, venues, institutions, travel agents
						and transport or tour operators. An updated list of the above-mentioned third parties is
						available at the registered office of Best of Rome Tour and may be known simply by
						sending a request at the email <Text style={styles.contact}>contact@bestinrometour.com</Text>.
					</Text>
				</View>
			</Container>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	page: {
		gap: 20,
	},
	para: {
		fontFamily: 'Regular',
		fontSize: fontSize.sm,
		lineHeight: 25,
	},
    contact: {
        fontFamily: 'Regular',
        color: colors.primary
    }
})
