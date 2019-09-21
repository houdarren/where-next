package org.wherenext.wherenextapp.db.model;

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

//@Entity
public class Opportunity {

//    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer opportunityId;

    private String title;

    private Integer hits;

    private String summary;

    private String categoryId;

    private String categoryDesc;

    private String orgTitle;

    public Integer getOpportunityId() {
        return opportunityId;
    }

    public String getTitle() {
        return title;
    }

    public Integer getHits() {
        return hits;
    }

    public String getSummary() {
        return summary;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public String getCategoryDesc() {
        return categoryDesc;
    }

    public String getOrgTitle() {
        return orgTitle;
    }

    public void setOpportunityId(Integer opportunityId) {
        this.opportunityId = opportunityId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public void setCategoryDesc(String categoryDesc) {
        this.categoryDesc = categoryDesc;
    }

    public void setOrgTitle(String orgTitle) {
        this.orgTitle = orgTitle;
    }
}
