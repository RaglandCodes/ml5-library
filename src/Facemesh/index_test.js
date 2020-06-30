// Copyright (c) 2020 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// import * as tf from '@tensorflow/tfjs-core';
// import {stubbedImageVals} from './test_util';
const { facemesh } = ml5;

const FACEMESH_IMG = 'https://github.com/ml5js/ml5-adjacent/raw/master/02_ImageClassification_Video/starter.png';

const FACEMESH_TEST_OPTIONS = {
  maxContinuousChecks: 4,
  detectionConfidence : 0.8,
  maxFaces: 5,
  iouThreshold: 0.4,
  maxPoseDetections: 5,
  scoreThreshold: 0.8,
};

describe('Facemesh', () => {
  let facemeshInstance;

  async function getImage() {
    const img = new Image();
    img.crossOrigin = '';
    img.src = FACEMESH_IMG;
    await new Promise((resolve) => { img.onload = resolve; });
    return img;
  }

  beforeAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // const image = await getImage();
    facemeshInstance = await facemesh(FACEMESH_TEST_OPTIONS);
  });

  // it('Instantiates Facemesh with specified options', () => {
  //   console.log(facemeshInstance);
  //   expect(facemeshInstance.maxContinuousChecks).toBe(FACEMESH_TEST_OPTIONS.maxContinuousChecks);
  //   expect(facemeshInstance.detectionConfidence).toBe(FACEMESH_TEST_OPTIONS.detectionConfidence);
  //   expect(facemeshInstance.maxFaces).toBe(FACEMESH_TEST_OPTIONS.maxFaces);
  //   expect(facemeshInstance.iouThreshold).toBe(FACEMESH_TEST_OPTIONS.iouThreshold);
  //   expect(facemeshInstance.maxPoseDetections).toBe(FACEMESH_TEST_OPTIONS.maxPoseDetections);
  //   expect(facemeshInstance.scoreThreshold).toBe(FACEMESH_TEST_OPTIONS.scoreThreshold);
  // });

  it('detects poses in image', async () => {
    
    // let facePredictions = [];
    // facemeshInstance.on('predict', results => {
    //   facePredictions = results;
    // });

    const image = await getImage();
    const facePredictions = await facemeshInstance.predict(image);

    console.log(facePredictions)
    expect(facePredictions[0].mesh).toBeDefined();
  });
});
