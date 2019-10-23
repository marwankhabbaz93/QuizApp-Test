export class QuizConfig {
    allowBack: boolean;
    duration: number;  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    showClock: boolean;
    showPager: boolean;
    

    constructor(data: any) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.duration = data.duration;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
}
