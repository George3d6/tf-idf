/*
*  Algorithms for computing Inverse document frequency
*/

//unary (always returns 1), left for completeness purposes
function unaryidf(nrDocs, nrOccurances) {
  return 1;
}

//inverse document frequency
function idf(nrDocs, nrOccurances) {
  return Math.log(nrDocs/nrOccurances);
}

//smooth inverse document frequency
function idfSmooth(nrDocs, nrOccurances) {
  return Math.log(1 + (nrDocs/nrOccurances) );
}

//probabilistic inverse document frequency
function probabilisticidf(nrDocs, nrOccurances) {
  return Math.log( (nrDocs - nrOccurances)/(1 + nrOccurances) );
}

//Requires the term with the highest frequency,
//Might prove slightly better but its more annyoing to implement
//I'm leaving it out for now
/*
//maximum inverse document frequency
function idfMax(nrDocs, nrOccurances) {
  return Math.log(1 +());
}
*/

/*
*  Algorithms for computing term frequency
*/

//binary text frequency
function binarytf(termFrequency) {
  if(termFrequency > 0) {
    return 1;
  } else {
    return 0;
  }
}

//raw text frequency
function rawtf(termFrequency) {
  return termFrequency;
}

//log normalization text frequency
function logNormalizationtf(termFrequency) {
  return 1 + Math.log(termFrequency);
}

//Leaving this one out for now since it requires max
/*
//double normalization text frequency
function doubleNormalizationtf(termFrequency) {
  return 0.5 + 0.5*termFrequency/maxtermFrequency;
}
*/

module.exports = {
  unaryidf : unaryidf,
  idf : idf,
  idfSmooth : idfSmooth,
  probabilisticidf : probabilisticidf,
  binarytf : binarytf,
  rawtf : rawtf,
  logNormalizationtf : logNormalizationtf
}
