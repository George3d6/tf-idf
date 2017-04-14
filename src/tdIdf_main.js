/*
*  v - 0.3.0
*  The main module of the td-idf JavaScript library
*  Intended to be used with webpack
*  This is a package intended for developing other libraries/wrappern around it
*  For the tag generation library see : <link will be here once that is done>
*/
let TextMapper = require("./TextMapper.js").TextMapper;
let tdIdf = require("./tdIdfAlgorithms.js");
let algs = require("./auxiliaryAlgorithms.js");

//Configuration object, it has 4 properties:
//trainingDocuments is an array of documents on which the model is trained but aren't included in the importance map
//tfFunction is the test frequency function, can take the value: binary, logNormalization or raw
//idfFunction is the inverse document frequency function, can take value: idf, unary, smooth, probabilistic
//separators is and array of separators which shall be used to map the documents to smaller ones
let configurations = {
  trainingDocuments : [""],
  tfFunction : "raw",
  idfFunction : "idf",
  separators : ["\n", "."]
}

//Main function, returns an array of map with the importance of each word in each document
function makeImportanceMap(...inText) {
  let textMapper = new TextMapper(...configurations.separators);

  textMapper.feedDocuments(...inText, ...configurations.trainingDocuments);
  let documentsTrain = textMapper.generateDocuments();

  textMapper.feedDocuments(...inText);
  let documents = textMapper.generateDocuments();


  let wordsMapsTrain = tdIdf.computeWordsDocumentsFrequency(documentsTrain);
  let wordsOccuranceMapTrain = tdIdf.computeWordOccuranceFrequency(wordsMapsTrain);
  let weightsMap = tdIdf.computeWordsWeightMap(wordsOccuranceMapTrain, documents.length, choseIdf());

  let wordsMaps = tdIdf.computeWordsDocumentsFrequency(documents);
  return tdIdf.computeDocumentWordImportanceMap(wordsMaps, weightsMap, choseTf());
}

//Function called to chose the text frequency function
function choseTf() {
  let rtf;
  if(configurations.tfFunction == "binary") {
    rtf = algs.binarytf;
  } else if(configurations.tfFunction == "logNormalization") {
    rtf = algs.logNormalizationtf;
  } else if(configurations.tfFunction == "raw") {
    rtf = algs.rawtf;
  } else {
    rtf = algs.rawtf;
  }
  return rtf;
}

//Function called to chose the inverse document frequency function
function choseIdf() {
  let rtf;
  if(configurations.idfFunction == "idf") {
    rtf = algs.idf;
  } else if (configurations.idfFunction == "unary") {
    rtf = algs.unaryidf;
  } else if (configurations.idfFunction == "smooth") {
    rtf = algs.idfSmooth;
  } else if (configurations.idfFunction == "probabilistic") {
    rtf = algs.probabilisticidf;
  } else {
    rtf = algs.idf;
  }
  return rtf;
}

module.exports = {
  configurations : configurations,
  makeImportanceMap : makeImportanceMap
}
