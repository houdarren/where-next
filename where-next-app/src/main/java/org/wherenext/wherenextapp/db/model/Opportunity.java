package org.wherenext.wherenextapp.db.model;

import javax.persistence.*;

@Entity
public class Opportunity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer opportunityId;

    private String title;

    private String hits;

    @Lob
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

    public String getHits() {
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

    public void setHits(String hits) {
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
