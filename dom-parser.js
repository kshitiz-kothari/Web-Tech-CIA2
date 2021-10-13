// Return XMLDocument, or throw an Error!
function parseXML(xmlString) {
    var parser = new DOMParser();
    // Parse a simple Invalid XML source to get namespace of <parsererror>:
    var docError = parser.parseFromString('INVALID', 'text/xml');
    var parsererrorNS = docError.getElementsByTagName("parsererror")[0].namespaceURI;
    // Parse xmlString:
    // (XMLDocument object)
    var doc = parser.parseFromString(xmlString, 'text/xml');
    if (doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) {
        throw new Error('Error parsing XML');
    }
    return doc;
}

// XML String:
var xmlString = "<?xml version = '1.0'?>" +
    "<CHRIST> " +
    "   <student rollNo = '393'> " +
    "      <STU_NAME>Kshitiz Kothari</STU_NAME> " +
    "      <STU_BRANCH>Computer Science</STU_BRANCH> " +
    "      <EMAIL>kshitiz.kothari@cs.christuniversity.in</EMAIL> " +
    "      <STU_COLLEGE>CHRIST COLLEGE</STU_COLLEGE> " +
    "   </student> "

    +
    "   <student rollNo = '493'> " +
    "      <STU_NAME>Vaidika Nawal</STU_NAME> " +
    "      <STU_BRANCH>Data Science</STU_BRANCH> " +
    "      <EMAIL>vaidika.nawal@ds.christuniversity.in</EMAIL> " +
    "      <STU_COLLEGE>CHRIST COLLEGE</STU_COLLEGE> " +
    "   </student> "

    +
    "   <student rollNo = '593'> " +
    "      <STU_NAME>Raj Singh</STU_NAME> " +
    "      <STU_BRANCH>Computer Science</STU_BRANCH> " +
    "      <EMAIL>raj.singh@cs.christuniversity.in</EMAIL> " +
    "      <STU_COLLEGE>CHRIST COLLEGE</STU_COLLEGE> " +
    "   </student> " +
    "</CHRIST> ";


function clickHandler(evt) {

    console.log(xmlString);
    var doc;

    try {
        // XMLDocument object:
        doc = parseXML(xmlString);
        console.log(doc.documentElement);
    } catch (e) {
        alert(e);
        return;
    }
    resetLog();

    // Element object. <--> <class>
    var rootElement = doc.documentElement;
    //
    var children = rootElement.childNodes;

    for(var i =0; i< children.length; i++) {
       var child = children[i];
       // <studen> Element
       if(child.nodeType == Node.ELEMENT_NODE)  {
           var rollNo = child.getAttribute("rollNo");
           var STU_NAMEElement = child.getElementsByTagName("STU_NAME")[0];
           var STU_BRANCHElement = child.getElementsByTagName("STU_BRANCH")[0];
           var EMAILElement = child.getElementsByTagName("EMAIL")[0];

           var STU_NAME = STU_NAMEElement.textContent;
           var STU_BRANCH = STU_BRANCHElement.textContent;
           var EMAIL = EMAILElement.textContent;

           appendLog("rollNo: " + rollNo);
           appendLog("Student Name: " + STU_NAME);
           appendLog("Student Branch: " + STU_BRANCH);
           appendLog("Email: " + EMAIL);
       }
    }

}


function resetLog() {
    document.getElementById('textarea-log').value = "";
}

function appendLog(msg) {
    document.getElementById('textarea-log').value += "\n" + msg;
}