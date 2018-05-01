xhook.after(function(req, res) {
	if (res.finalUrl.includes('https://www.docusign.net/Signing/envelope')) {
		const data = JSON.parse(res.data)

		data.allowAttachmentFax               =  true
		data.allowCommentFirstTimeToolTip     =  true
		data.allowDocumentOverlay             =  true
		data.allowDownload                    =  true
		data.allowEHankoStamps                =  true
		data.allowFinishLater                 =  true
		data.allowFreeformFirstLastEmailTags  =  true
		data.allowPrint                       =  true
		data.allowRotate                      =  true
		data.allowSigPad                      =  true
		data.allowSignOnPaperFax              =  true
		data.allowSigningExtensions           =  true
		data.allowWootricSurveyInComments     =  true
		data.attachCertToEnvPDF               =  true

		res.data = res.text = JSON.stringify(data)
	}
})
